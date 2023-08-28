import { BadRequestException, Body, ConflictException, Inject, Injectable, InternalServerErrorException, NotAcceptableException, NotFoundException, UnauthorizedException } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { User } from "../users/schemas/user.schema";
import { Cache } from "cache-manager";
import { MailerService } from "@nestjs-modules/mailer";
import JwtTokensInterface from "./interfaces/jwt-token.interface";
import * as handlebars from "handlebars";
import * as fs from "fs";
import changeUserPasswordTokenVerificationInterface from "./interfaces/change-user-password-token-verification.interface";
import { generateRandomToken } from "../../helpers/randomToken.helper";
import changeUserPasswordInterface from "./interfaces/change-user-password.interface";
import signupUserInterface from "./interfaces/signup-user.interface";
import randomUserTokenInterface from "./interfaces/random-user-token.dto";
import { UsersService } from "../users/users.service";
import { ConfigService } from "@nestjs/config";
import { CACHE_MANAGER } from "@nestjs/common/cache";
import * as otpGenerator from 'otp-generator';
import * as twilio from 'twilio';
import {  TwilioService } from 'nestjs-twilio';
import { generateRandomOtp } from "../../helpers/randomOtp.helper";
import userOtpActiveInterface from "./interfaces/user-otp-active.interface";
import { UsersRepository } from "../users/users.respository";
import signupUserDocumentsInterface from "./interfaces/signup-user-documents.interface";
import * as path from 'path';
import userDocumentActiveInterface from "./interfaces/user-document-active.interface";
import {UserDocuments} from "../user-documents/schemas/userDocuments.schema";
import {UserDocumentsService} from "../user-documents/user-documents.service";
import { userVerificationsDocumentsService } from "../user-verifications-documents/user-verifications-documents.service";


@Injectable()
export class AuthService {

  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService,
    private readonly twilioService: TwilioService,
    private readonly UsersDocumentService: UserDocumentsService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly usersRepository: UsersRepository,
    private readonly UserVerificationsDocumentsService: userVerificationsDocumentsService,

  ) {}



        //FRONTEND APIS
         // Sign up
        async signup(@Body() Signup: signupUserInterface)
        {
              const Otpexpires = this.configService.get("OTP_EXPIRY");
              const Email = await this.usersService.findUserByEmail(Signup.email);
              if (Email)
              {
                 throw new ConflictException('This email already exists');
              }

              if (Signup.password !== Signup.confirm_password)
              {
                 throw new NotAcceptableException('Passwords do not match');
              }

              const isPasswordStrongEnough = Signup.password.match(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,);
              if (!isPasswordStrongEnough)
              {
                 throw new BadRequestException('Password is too weak');
              }

              const user = await this.usersService.createUser({
                   ...Signup,
                  password: await AuthService.hashPassword(Signup.password),
              });
              const base64Data = user.image;
              const base64image = base64Data.split(';base64,').pop();
              const pdfBuffer = Buffer.from(base64image, 'base64');

              const savePath = path.join(
                __dirname,
                '../../../..',
                '/asset/',
                `${user.firstName}-${user.lastName}.png`
              );
              fs.writeFileSync(savePath, pdfBuffer);

              const Otp =generateRandomOtp(6)
              const OtpKey = `Otp-token:${user.email}`;
              const OtpValue = JSON.stringify({ token: Otp, active: false, });
              await this.cacheManager.set(OtpKey, OtpValue, { ttl:  Otpexpires});
              console.log(Otp)
              try
              {
                   await  this.sendOtp(user.phoneNo,Otp)
                   await this.sendAdminEmail(this.configService.get("ADMIN_EMAIL"), user);
              }
              catch (e)
              {
                    throw new BadRequestException('Failed to send otp');
              }
              return { message: 'Please check your number to verify your otp!'};
        }








          // user update ( otp active status)
          async isOtpActive(email:string,@Body() reqBody: userOtpActiveInterface)
          {
            const user = await this.usersService.findUserByEmail(email);
            if (!user)
            {
                throw new NotFoundException('Invalid email');
            }

            const OtpKey = `Otp-token:${user.email}`;
            const cachedToken = await this.cacheManager.get(OtpKey);
            if (!cachedToken)
            {
                throw new UnauthorizedException('Otp expired');
            }

            const parsedToken = JSON.parse(<string>cachedToken);
            if (parsedToken.token !== reqBody.Otp)
            {
                throw new UnauthorizedException('Invalid Otp');
            }

            if (parsedToken.active === true)
            {
                throw new ConflictException('You are already active, Please log in');
            }
            try
            {
                parsedToken.active = true;
                const updatedTokenValue = JSON.stringify(parsedToken);
                await this.cacheManager.set(OtpKey, updatedTokenValue, { ttl: 5400 });
                const user = await this.usersService.isOtpActive(email, reqBody.otp_status);
                const Username = user.firstName;
                const logo_l2a=process.env.LOGO_L2A
                const contact_us_url= process.env.CONTACT_US
                const privacy_policy_url= process.env.PRIVACY_POLICY
                await this.sendWelcomeEmail(email, Username,contact_us_url,privacy_policy_url,logo_l2a);
                return { message: 'Your account has been successfully created. Please login here' };

            }
            catch (e)
            {
                 throw new InternalServerErrorException();
            }
          }



           // user  document update
            async isDocumentActive(userId:string,@Body() reqBody: userDocumentActiveInterface):Promise<{ message: string, updateResult:UserDocuments}>
            {
                  await this.usersService.findUserById(userId);
                  const updateResult =await this.UsersDocumentService.updateDocument(userId,reqBody.documentStatus);
                  return { message: "document updated successfully", updateResult };
            }




       //login
        async login(user: User):Promise<JwtTokensInterface>
        {
            const result= await this.usersService.findUserById(user.id);
            const unapprovedDocuments = result.UserDocuments.filter(doc => doc.documentstatus === 'pending' || doc.documentstatus === 'rejected');
            if (unapprovedDocuments.length > 0)
            {
              const unapprovedDocumentTitles = unapprovedDocuments.map(doc => doc.titleName).join(', ');
              throw new BadRequestException(`User documents (${unapprovedDocumentTitles}) have not been approved`);
            }


            if (user.otpStatus == 'false'   )
            {
                throw new BadRequestException('User is not active');
            }

            if (user.blockStatus == 'block')
            {
               throw new BadRequestException('Your account has been blocked');
            }
            const payload = {
              id: user.id,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
              password: user.password,
              country:user.country,
              dateOfBirth:user.dateOfBirth,
              phoneNo:user.phoneNo,
              imag:user.image,
              roles: user.roles,
              otpStatus: user.otpStatus,
              blockStatus: user.blockStatus,
            };
            const accessTokenRedis = this.jwtService.sign(payload);
            const expires = this.configService.get("TOKEN_EXPIRY");
            console.log("expired" ,expires)
            await Promise.all([this.cacheManager.set(accessTokenRedis, user, { ttl: expires }),]);
            return {
              id: user.id,
              firstname: user.firstName,
              lastname: user.lastName,
              email: user.email,
              country:user.country,
              date_of_birth:user.dateOfBirth,
              phone_no:user.phoneNo,
              image:user.image,
              roles: user.roles,
              otp_status: user.otpStatus,
              blockStatus: user.blockStatus,
              access_token: accessTokenRedis,
            };
        }




         // user document
          async UserDocument(@Body() body:signupUserDocumentsInterface )
          {
              await this.usersService.getUserById(body.userId)


              // const type = await this.UserVerificationsDocumentsService.gettittlebytype(body.type)
              // if (!type)
              // {
              //   throw new NotFoundException('Invalid type');
              // }

              // const title = await this.UserVerificationsDocumentsService.gettittlebyname(body.titleName)
              // if (!title)
              // {
              //   throw new NotFoundException('Invalid tittle Name');
              // }

              const slug = await this.UserVerificationsDocumentsService.gettittlebySlug(body.slug)
              if (!slug)
              {
                throw new NotFoundException('Invalid slug');
              }
              const userData: signupUserDocumentsInterface & { titleName: string,type:string } = {
                ...body,
                titleName:slug.title,
                type:slug.type,

              };
              const user = await this.UsersDocumentService.UserDocument(userData);
              const base64Data = user.image;
              const base64image = base64Data.split(';base64,').pop();
              const pdfBuffer = Buffer.from(base64image, 'base64');

              const savePath = path.join(
                __dirname,
                '../../../..',
                '/asset/',
                `${user.id}-${user.type}-${user.titleName}.png`
              );
              fs.writeFileSync(savePath, pdfBuffer);
              return user;
          }




         //get user by id
          async findUserById(userId: string): Promise<User>
          {
               return  await this.usersService.findUserById(userId);
          }



          // get data from google ( signup)
          async  googleLogin(req:any)
          {
            if (!req.user)
            {
              return { message: "No user from Google", user: null, access_token: null };
            }
               return  req.user;
          }



          // sign up with google
          async saveUserToDatabase(userData:any): Promise<User>
          {
                const  email= await this.usersService.findUserByEmail(userData.email);
                if(email)
                {
                  throw new UnauthorizedException("Email is already in use")
                }
                const user = new User();
                user.firstName = userData.name;
                user.lastName = userData.username;
                user.email = userData.email;
                user.country=userData.country;
                user.dateOfBirth=userData.date_of_birth;
                user.phoneNo=userData.phone_no;
                user.image=userData.image;
                user.email=userData.email;
                user.password=userData.password;
                user.roles=userData.roles;
                user.otpStatus=userData.otp_status;
                user.blockStatus=userData.blockStatus;
                return   await this.usersRepository.createUser(user);
          }


            // get all users
            async getAllUser(): Promise<User[]>
            {
                const users = await this.usersService.getAllUser();
                if(!users)
                {
                  throw new NotFoundException('No user exit');
                }
                return users;
            }





          // profile get
            async getProfile(accessToken: string)
            {
                const cachedToken = await this.cacheManager.get(accessToken);
                if (!cachedToken)
                {
                   throw new UnauthorizedException('Token expired');
                }
                return cachedToken;
            }




        // refresh token
        async refreshToken(user: User, accessToken: string)
        {
            const cachedToken = await this.cacheManager.get(accessToken);
            if (!cachedToken || cachedToken)
            {
                await this.cacheManager.del(accessToken);
                const payload = {
                  id: user.id,
                  firstName: user.firstName,
                  lastName: user.lastName,
                  email: user.email,
                  password: user.password,
                  country:user.country,
                  dateOfBirth:user.dateOfBirth,
                  phoneNo:user.phoneNo,
                  imag:user.image,
                  roles: user.roles,
                  otpStatus: user.otpStatus,
                  blockStatus: user.blockStatus,
                };
                const accessTokenRedis = this.jwtService.sign(payload);
                const expires = this.configService.get("TOKEN_EXPIRY");
                await Promise.all([this.cacheManager.set(accessTokenRedis, user, { ttl: expires })]);
                return { refresh_token: accessTokenRedis};
            }
        }



         //logout
          async logout(accessToken: string): Promise<{ message: string }>
          {
              const cachedToken = await this.cacheManager.get(accessToken);
              if (!cachedToken)
              {
                throw new NotFoundException('Token expired');
              }
              await this.cacheManager.del(accessToken);
              return { message: 'Successfully logout' };
          }





          //email (token)
          async token(randomUserToken: randomUserTokenInterface)
          {
              const user = await this.usersService.findUserByEmail(randomUserToken.email);
              if (!user)
              {
                 throw new NotFoundException('Invalid email');
              }
              const Username = user.firstName;
              const resetToken = generateRandomToken(32);
              const expires = this.configService.get("TOKEN_EXPIRY");
              const tokenKey = `forgot-password-token:${user.email}`;
              const tokenValue = JSON.stringify({token: resetToken,active: false, });
              const logo_l2a=process.env.LOGO_L2A
              const contact_us_url= process.env.CONTACT_US
              const privacy_policy_url= process.env.PRIVACY_POLICY
              await this.cacheManager.set(tokenKey, tokenValue, { ttl: expires });
              const FRONTEND_APP_URL = process.env.FRONTEND_APP_URL;
              const changePasswordUrl = `${FRONTEND_APP_URL}/change-password/#/Auth/AuthController_changePasswordToken`;
              console.log('token', resetToken);
              const queryParams = `?resetToken=${resetToken}&email=${user.email}`;
              const resetUrl = `${changePasswordUrl}${queryParams}`;
              const template = handlebars.compile(fs.readFileSync('src/templates/resetPassword.html', 'utf8'),);
              const emailBody = template({ resetUrl, username: Username,contact_us_url,privacy_policy_url,logo_l2a });
              try
              {
                  await this.sendToken(user.email, emailBody);
              }
              catch (e)
              {
                  throw new BadRequestException('Failed to send email');
              }
              return {
                message: 'Please check your email to reset your password!',
                tokenStatus: true,
              };
          }



           //change user password token verification
            async tokenVerification(email:string,@Body() reqBody: changeUserPasswordTokenVerificationInterface)
            {
                const user = await this.usersService.findUserByEmail(email);
                if (!user)
                {
                   throw new NotFoundException('Invalid email');
                }
                const tokenKey = `forgot-password-token:${user.email}`;
                const cachedToken = await this.cacheManager.get(tokenKey);
                if (!cachedToken)
                {
                   throw new UnauthorizedException('token expired');
                }

                const parsedToken = JSON.parse(<string>cachedToken);
                if (parsedToken.token !== reqBody.token)
                {
                   throw new UnauthorizedException('Invalid token');
                }
                else
                {
                    parsedToken.active = true;
                    const updatedTokenValue = JSON.stringify(parsedToken);
                    await this.cacheManager.set(tokenKey, updatedTokenValue, { ttl: 5400 });
                }
                return {
                    statusCode: 200,
                    message: 'Token is active and valid',
                    tokenStatus: true,
                };
            }



             // change password
             async changePassword(email:string,@Body() reqBody: changeUserPasswordInterface)
             {
                  const user = await this.usersService.findUserByEmail(email);
                  if (!user)
                  {
                     throw new NotFoundException('Invalid email');
                  }

                  const tokenKey = `forgot-password-token:${user.email}`;
                  const cachedToken = await this.cacheManager.get(tokenKey);
                  if (!cachedToken)
                  {
                      throw new UnauthorizedException('token expired');
                  }

                  const parsedToken = JSON.parse(<string>cachedToken);
                  console.log(cachedToken);
                  if (parsedToken.token !== reqBody.token)
                  {
                     throw new UnauthorizedException('Invalid token');
                  }

                  if (reqBody.newPassword !== reqBody.confirmPassword)
                  {
                     throw new NotAcceptableException('Passwords do not match');
                  }

                  const isPasswordStrongEnough = reqBody.newPassword.match(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,);
                  if (!isPasswordStrongEnough)
                  {
                     throw new BadRequestException('Password is too weak');
                  }

                  const hashedPassword = await AuthService.hashPassword(reqBody.newPassword);

                  if (parsedToken.active == true)
                  {
                      const logo_l2a=process.env.LOGO_L2A
                      const contact_us_url= process.env.CONTACT_US
                      const privacy_policy_url= process.env.PRIVACY_POLICY
                      await this.usersService.updatePassword(email, hashedPassword);
                      await this.sendPasswordUpdatedEmail(email, user.firstName,contact_us_url,privacy_policy_url,logo_l2a);
                      const loginResult = this.login(user);
                      await this.cacheManager.del(tokenKey);
                      return loginResult;
                  }
                  else
                  {
                      throw new UnauthorizedException('plz firstly active token and then  password changed',);
                  }
          }





          // Generating hashed password
          private static async hashPassword(password: string): Promise<string>
          {
              const salt = await bcrypt.genSalt();
              return bcrypt.hash(password, salt);
          }


         // send Otp
           async sendOtp(phone_no: any,Otp:any)
           {
                //  const OTP = otpGenerator.generate(6, { digits: true, alphabets: false, upperCase: false, specialChars: false });
                const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
                try
                {
                     await twilioClient.messages.create({
                      to:  phone_no,
                      from: process.env.TWILIO_PHONE_NUMBER,
                      body: `Your verification OTP is: ${Otp}`,
                  });
                }
                catch (error)
                {
                     throw new BadRequestException('Failed to send OTP');
                }

          }



         // sending email(welcome after registered)
          async sendWelcomeEmail(email: string, Username: string,contact_us_url:string,privacy_policy_url:string,logo_l2a:String)
          {
              const template = handlebars.compile(fs.readFileSync('src/templates/welcomeEmail.html', 'utf8'),);
              const html = template({ username: Username,contact_us_url,privacy_policy_url ,logo_l2a});
              await this.mailerService.sendMail({
                to: email,
                subject: `You're In!`,
                html: html,
              });
          }




        //used for validation purpose
        async validateUser(email: string, password: string): Promise<User>
        {
            const user = await this.usersService.findUserByEmail(email);
            if (!user)
            {
              throw new NotFoundException('Invalid email');
            }
            const passwordValid = await bcrypt.compare(password, user.password);
            if (!passwordValid)
            {
               throw new NotFoundException('Invalid password');
            }

            return user;
        }





          // sending admin email
          async sendAdminEmail(email: string, user: any)
          {

            const template = handlebars.compile(fs.readFileSync('src/templates/adminEmail.html', 'utf8'),);
            const html = template({ email, name: user.firstname, userEmail: user.email});
            await this.mailerService.sendMail({
              to: email,
              subject: 'New Signup',
              html: html,
            });
          }


          //sending email (updated password)
          async sendPasswordUpdatedEmail(email: string, name: string,contact_us_url:string,privacy_policy_url:string,logo_l2a:string)
          {
            const template = handlebars.compile(fs.readFileSync('src/templates/updatePassword.html', 'utf8'),);
            const html = template({ email, username: name,contact_us_url,privacy_policy_url,logo_l2a});
            await this.mailerService.sendMail({
              to: email,
              subject: 'Success: Your password has been reset!',
              html: html,
            });
          }





          //sending Token(forgotPassword)
          async sendToken(email: string, emailBody: string)
          {
            await this.mailerService.sendMail({
              to: email,
              subject: 'Need a Reset?',
              html: emailBody,
            });
          }


  //apple
  // async registerByIDtoken(payload: any)
  // {
  //   if(payload.hasOwnProperty('id_token')){
  //
  //     let email, firstName, lastName = '';
  //
  //     //You can decode the id_token which returned from Apple,
  //     const decodedObj = await this.jwtService.decode(payload.id_token);
  //     const accountId = decodedObj.sub || '';
  //     console.info(`Apple Account ID: ${accountId}`);
  //
  //     //Email address
  //     if (decodedObj.hasOwnProperty('email'))
  //     {
  //       email = decodedObj['email'];
  //       console.info(`Apple Email: ${email}`);
  //     }
  //
  //     //You can also extract the firstName and lastName from the user, but they are only shown in the first time.
  //     if (payload.hasOwnProperty('user')) {
  //       const userData = JSON.parse(payload.user);
  //       const { firstName, lastName } = userData.name || {};
  //     }
  //
  //     //.... you logic for registration and login here
  //
  //   }
  //   throw new UnauthorizedException('Unauthorized');
  // }
  //
  //



}
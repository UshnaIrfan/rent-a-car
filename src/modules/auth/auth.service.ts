import {
  BadRequestException,
  Body,
  CACHE_MANAGER,
  ConflictException,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotAcceptableException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/schemas/user.schema';
import { Cache } from 'cache-manager';
import { MailerService } from '@nestjs-modules/mailer';
import JwtTokensInterface from '../../interfaces/jwt-token.interfac';
import signupUserInterface from './interfaces/signup-user.interface';
import changeUserPasswordInterface from './interfaces/change-user-password.interface';
import randomUserTokenInterface from './interfaces/random-user-token.dto';
import { generateRandomToken } from '../../helpers/randomtoken.helper';
import * as handlebars from 'handlebars';
import * as fs from 'fs';
import updateUserInterface from './interfaces/update-user.interface';
import paginationUserInterface from './interfaces/pagination-user.interface';
import userActiveInterface from './interfaces/user-active.interface';
import changeUserPasswordTokenVerificationInterface from './interfaces/change-user-password-token-verification.interface';
import adminUpdateUserInterface from './interfaces/admin-update.user.interface';
import { adminUpdateBlockStatusUserDto } from './dto/admin-update-block-status.user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private readonly mailerService: MailerService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}



        // ADMIN APIS
       // get all users and search by name
        async getAllUsers(page: number, pageSize?: number, username?: string,): Promise<paginationUserInterface>
        {
            return this.usersService.getAllUsers(page, pageSize, username);
        }




      //  admin user update
      async updateUser(updateUser: updateUserInterface): Promise<{ message: string; update: updateUserInterface }>
      {
        const update = await this.usersService.updateUser(
          updateUser.id,
          updateUser.name,
          updateUser.username,
          updateUser.email,
        );
        if (!update)
        {
          throw new NotFoundException('invalid user id');
        }
        return { message: 'User updated successfully', update };
      }



     // admin user update status
      async adminUpdateUserStatus(adminUpdateStatus: adminUpdateUserInterface): Promise<{ update: User; message: string }>
      {
          const update = await this.usersService.adminUpdateUserStatus(adminUpdateStatus.userId, adminUpdateStatus.status,);
          if (!update)
          {
            throw new NotFoundException('invalid user id');
          }
          return { message: 'User status updated successfully', update };
      }



      // admin user update  block status
      async adminUpdateUserBlockStatus(adminUpdateBlockStatus: adminUpdateBlockStatusUserDto,): Promise<{ update: User; message: string }>
      {
          const update = await this.usersService.adminUpdateUserBlockStatus(
            adminUpdateBlockStatus.userId,
            adminUpdateBlockStatus.blockStatus,
          );
          if (!update)
          {
            throw new NotFoundException('invalid user id');
          }
          return { message: 'User blocked status updated successfully', update };
      }



        //delete user with review with likeAndDislike
        async deleteUser(id: string): Promise<{ message: string }>
        {
            await this.usersService.deleteUser(id);
            return {
              message: ' deleted successfully',
            };
        }



        // calculate user each week and each month
        async getUserDetails(start?: string, end ?: string)
        {
            return await this.usersService.getUserDetails(start,end);
        }



        //FRONTEND APIS
        // Sign up
      async signup(@Body() Signup: signupUserInterface)
      {

          const User = await this.usersService.findUserByEmail(Signup.email);
          if (User && User.status == 'inactive')
          {
              const Name = User.name;
              const Token = generateRandomToken(32);
              const expiresAt = new Date();
              expiresAt.setMinutes(expiresAt.getMinutes() + 90);
              const tokenKey = `forgot-password-token:${User.email}`;
              const tokenValue = JSON.stringify({
                token: Token,
                expiresAt,
                active: false,
              });
              await this.cacheManager.set(tokenKey, tokenValue, { ttl: 5400 });

              const baseUrl = process.env.BASE_URL;
              const ActiveUrl = `${baseUrl}/login#/Auth/AuthController_isActive`;

              console.log('token', Token);
              const logo_l2a=process.env.LOGO_L2A
              const contact_us_url= process.env.CONTACT_US
              const privacy_policy_url= process.env.PRIVACY_POLICY
              const queryParams = `?Token=${Token}&email=${User.email}`;
              const activeUrl = `${ActiveUrl}${queryParams}`;
              const template = handlebars.compile(fs.readFileSync('src/templates/signUp.html', 'utf8'),);
              const emailBody = template({ activeUrl, username: Name, baseUrl, contact_us_url,privacy_policy_url,logo_l2a});

              await this.sendVerificationEmail(User.email, emailBody);

              throw new ConflictException('You are already created this account. Resend email please verify your account.',);
         }
        else
        {
            const username = await this.usersService.findUserByUsername(Signup.username,);
            if (username)
            {
              throw new ConflictException('Username already exists');
            }

            const Email = await this.usersService.findUserByEmail(Signup.email);
            if (Email)
            {
              throw new ConflictException('Email already exists');
            }

            const { password } = Signup;
            const isPasswordStrongEnough = password.match(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,);

            if (!isPasswordStrongEnough)
            {
              throw new BadRequestException('Password is too weak');
            }

            const user = await this.usersService.createUser({
              ...Signup,
              password: await AuthService.hashPassword(password),
            });

            const Name = user.name;
            const Token = generateRandomToken(32);
            const expiresAt = new Date();
            expiresAt.setMinutes(expiresAt.getMinutes() + 90);
            const tokenKey = `forgot-password-token:${user.email}`;
            const tokenValue = JSON.stringify({
              token: Token,
              expiresAt,
              active: false,
            });
            await this.cacheManager.set(tokenKey, tokenValue, { ttl: 5400 });

            const FRONTEND_APP_URL = process.env.FRONTEND_APP_URL;
            const ActiveUrl = `${FRONTEND_APP_URL}/login#/Auth/AuthController_isActive`;

            console.log('token', Token);
            const logo_l2a=process.env.LOGO_L2A
            const contact_us_url= process.env.CONTACT_US
            const privacy_policy_url= process.env.PRIVACY_POLICY
            const queryParams = `?Token=${Token}&email=${user.email}`;
            const activeUrl = `${ActiveUrl}${queryParams}`;
            const template = handlebars.compile(fs.readFileSync('src/templates/signUp.html', 'utf8'),);
            const emailBody = template({ activeUrl, username: Name,contact_us_url,privacy_policy_url,logo_l2a});

            try
            {
              await this.sendVerificationEmail(user.email, emailBody);
              await this.sendAdminEmail(process.env.ADMIN_EMAIL, user,contact_us_url,privacy_policy_url,logo_l2a);
            }
            catch (e)
            {
              throw new BadRequestException('Failed to send email');
            }

            return {
              message: 'Email sent successfully',
            };
          }
      }



      // isActive
           async isActive(@Body() reqBody: userActiveInterface)
           {
                const user = await this.usersService.findUserByEmail(reqBody.email);
                if (!user)
                {
                  throw new NotFoundException('Invalid email');
                }

                const tokenKey = `forgot-password-token:${user.email}`;
                const cachedToken = await this.cacheManager.get(tokenKey);

                if (!cachedToken)
                {
                  throw new UnauthorizedException('Token expired');
                }

                const parsedToken = JSON.parse(<string>cachedToken);
                if (parsedToken.token !== reqBody.token)
                {
                  throw new UnauthorizedException('Invalid token');
                }

                if (parsedToken.active === true)
                {
                  throw new ConflictException('You are already active, Please log in');
                }

              try
              {
                  if (parsedToken.active === false)
                  {
                    parsedToken.active = true;
                    const updatedTokenValue = JSON.stringify(parsedToken);
                    await this.cacheManager.set(tokenKey, updatedTokenValue, { ttl: 5400 });
                    const user = await this.usersService.isActive(reqBody.email, reqBody.status,);
                    const Username = user.name;
                    const logo_l2a=process.env.LOGO_L2A
                    const contact_us_url= process.env.CONTACT_US
                    const privacy_policy_url= process.env.PRIVACY_POLICY
                    await this.sendWelcomeEmail(reqBody.email, Username,contact_us_url,privacy_policy_url,logo_l2a);
                    return { message: 'Your account has been successfully created. Please login here' };
                  }
              }
              catch (e)
              {
                  throw new InternalServerErrorException();
              }
        }




       //login
        async login(user: User): Promise<JwtTokensInterface>
        {
            // if (user.isActive==false )
            if (user.status == 'inactive')
            {
              throw new BadRequestException('User is not active');
            }

            if (user.blockStatus == 'block')
            {
              throw new BadRequestException('Your account has been blocked');
            }
            const payload = {
              id: user.id,
              name: user.name,
              username: user.username,
              email: user.email,
              password: user.password,
              roles: user.roles,
              status: user.status,
              blockStatus: user.blockStatus,
              //isActive: user.isActive,
            };
            const accessTokenRedis = this.jwtService.sign(payload);
            const accessTokenTTL = 5400;
            await Promise.all([this.cacheManager.set(accessTokenRedis, user, { ttl: accessTokenTTL }),]);
            return {
              id: user.id,
              name: user.name,
              username: user.username,
              email: user.email,
              roles: user.roles,
              //isActive: user.isActive,
              status: user.status,
              blockStatus: user.blockStatus,
              access_token: accessTokenRedis,
            };
        }



      //email (token)
      async token(randomUserToken: randomUserTokenInterface)
      {
          const user = await this.usersService.findUserByEmail(randomUserToken.email);

          if (!user)
          {
            throw new NotFoundException('Invalid email');
          }
          const Username = user.name;
          const resetToken = generateRandomToken(32);
          const expiresAt = new Date();
          expiresAt.setHours(expiresAt.getHours() + 24);
          const tokenKey = `forgot-password-token:${user.email}`;
          const tokenValue = JSON.stringify({
            token: resetToken,
            expiresAt,
            active: false,
          });
          const logo_l2a=process.env.LOGO_L2A
          const contact_us_url= process.env.CONTACT_US
          const privacy_policy_url= process.env.PRIVACY_POLICY
          await this.cacheManager.set(tokenKey, tokenValue, { ttl: 86400 });
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
            message: 'Please check your email.',
            tokenStatus: true,
          };
      }



       //change user password token verification
        async tokenVerification(@Body() reqBody: changeUserPasswordTokenVerificationInterface,)
        {
            const user = await this.usersService.findUserByEmail(reqBody.email);
            if (!user)
            {
              throw new NotFoundException('Invalid email');
            }

            const tokenKey = `forgot-password-token:${user.email}`;
            const cachedToken = await this.cacheManager.get(tokenKey);
            console.log('before', cachedToken);

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
         async Password(@Body() reqBody: changeUserPasswordInterface)
         {
            const user = await this.usersService.findUserByEmail(reqBody.email);
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
                await this.usersService.updatePassword(reqBody.email, hashedPassword);
                await this.sendPasswordUpdatedEmail(reqBody.email, user.name,contact_us_url,privacy_policy_url,logo_l2a);
                const loginResult = this.login(user);
                await this.cacheManager.del(tokenKey);
                return loginResult;
            }
            else
            {
               throw new UnauthorizedException('plz firstly active token and then  password changed',);
            }
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



        //get user by id
        async getUserById(userId: string): Promise<User>
        {
            const user = await this.usersService.findUserById(userId);
            if (!user)
            {
              throw new NotFoundException('user not found');
            }

            return user;
        }



        // get all users
        async getAllUser(): Promise<User[]>
        {
            const user = await this.usersService.getAllUser();
            return user;
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



        // refresh token
        async refreshToken(users: User, accessToken: string)
        {
            const cachedToken = await this.cacheManager.get(accessToken);
            if (!cachedToken || cachedToken) {
              await this.cacheManager.del(accessToken);
              const payload = {
                id: users.id,
                name: users.name,
                username: users.username,
                email: users.email,
                password: users.password,
                roles: users.roles,
                status: users.status,
                // isActive: users.isActive,
              };
              const accessTokenRedis = this.jwtService.sign(payload);
              const accessTokenTTL = 5400;
              await Promise.all([
                this.cacheManager.set(accessTokenRedis, users, { ttl: accessTokenTTL }),
              ]);
              return {
                refresh_token: accessTokenRedis,
              };
            }
        }



        // Generating hashed password
        private static async hashPassword(password: string): Promise<string>
        {
          const salt = await bcrypt.genSalt();
          return bcrypt.hash(password, salt);
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



        //sending Token(forgotPassword)
        async sendToken(email: string, emailBody: string)
        {
          await this.mailerService.sendMail({
            to: email,
            subject: 'Need a Reset?',
            html: emailBody,
          });
        }



        // after register welcome  email
        async sendVerificationEmail(email: string, emailBody: string)
        {
          await this.mailerService.sendMail({
            to: email,
            subject: 'Please confirm your recent signup!',
            html: emailBody,
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



        // sending admin email
        async sendAdminEmail(email: string, user: any,contact_us_url:string,privacy_policy_url:string,logo_l2a:string)
        {
          const template = handlebars.compile(fs.readFileSync('src/templates/adminEmail.html', 'utf8'),);
          const html = template({ email, name: user.name, userEmail: user.email ,contact_us_url,privacy_policy_url,logo_l2a});
          await this.mailerService.sendMail({
            to: email,
            subject: 'New Signup',
            html: html,
          });
        }


  }
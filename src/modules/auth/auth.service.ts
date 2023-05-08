import {
  BadRequestException, Body,
  CACHE_MANAGER, ConflictException, ForbiddenException,
  Inject,
  Injectable, InternalServerErrorException,
  NotAcceptableException, NotFoundException, Query, UnauthorizedException
} from "@nestjs/common";
import {UsersService} from "../users/users.service";
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from "../users/schemas/user.schema";
import { Cache } from 'cache-manager';
import {MailerService} from "@nestjs-modules/mailer";
import { generateRandom } from "../../helpers/string.helper";
import JwtTokensInterface from "../../interfaces/jwt-token.interfac";
import signupUserInterface from "./interfaces/signup-user.interface";
import forgotPasswordInterface from "./interfaces/forgot-password.interface";
import changeUserPasswordInterface from "./interfaces/change-user-password.interface";
import forgotPasswordOtpInterface from "./interfaces/forgot-password-otp.interface";
import randomUserTokenInterface from "./interfaces/random-user-token.dto";
import { generateRandomToken } from "../../helpers/randontoken.helper";
import { jwtConstants } from "./constants/constants";
import { seller } from "../sellers/schemas/seller.schema";
import * as handlebars from 'handlebars';
import * as fs from 'fs';
import updateUserInterface from "./interfaces/update-user.interface";
import { SignUpUserDto } from "./dto/signup-user.dto";
import paginationUserInterface from "./interfaces/pagination-user.interface";
import userActiveInterface from "./interfaces/user-active.interface";


@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private readonly mailerService: MailerService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}




         // ADMIN APIS
         //get all users
        getAllUsers(page:number):Promise<paginationUserInterface>
        {
          return this.usersService.getAllUsers(page);
        }




        //update user
       async updateUser(updateUser:updateUserInterface):Promise<{ message: string, update:updateUserInterface}>
       {

          const update = await this.usersService.updateUser(updateUser.id ,updateUser.name,updateUser.username,updateUser.email);
          if (!update)
          {
             throw new NotFoundException('invalid user id');
          }
          return { message: "User updated successfully", update};
       }




        //delete user
       async deleteUser(id:string):Promise<{message: string, deletedUser:User}>
       {
          const deletedUser = await this.usersService.deleteUser(id);
          if (!deletedUser)
          {
             throw new NotFoundException('user not found');
          }

          return { message: "user deleted successfully", deletedUser };
       }






        //FRONTEND APIS
        // Sign up
    //     async signup(@Body() Signup: SignUpUserDto): Promise<User>
    //     {
    //         const username = await this.usersService.findUserByUsername(Signup.username);
    //         if (username)
    //         {
    //            throw new ConflictException('Username already exists');
    //         }
    //
    //        const email = await this.usersService.findUserByEmail(Signup.email);
    //        if (email)
    //        {
    //           throw new ConflictException('Email already exists');
    //        }
    //
    //       const { password } = Signup;
    //       const newPasswords=password
    //       const isPasswordStrongEnough = password.match(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/);
    //
    //       if (!isPasswordStrongEnough)
    //       {
    //           throw new BadRequestException('Password is too weak');
    //       }
    //
    //      const user = await this.usersService.createUser({
    //         ...Signup,
    //        password: await AuthService.hashPassword(password),
    //     });
    //
    //    // Send welcome email to new user
    //     await this.sendWelcomeEmail(user.username, user.email, newPasswords);
    //     return user;
    // }



          // Sign up
         async signup(@Body() Signup: SignUpUserDto)
         {
           const username = await this.usersService.findUserByUsername(Signup.username);
           if (username)
           {
              throw new ConflictException('Username already exists');
           }

          const email = await this.usersService.findUserByEmail(Signup.email);
          if (email)
          {
             throw new ConflictException('Email already exists');
          }

          const { password } = Signup;
          const isPasswordStrongEnough = password.match(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/);

          if (!isPasswordStrongEnough)
          {
             throw new BadRequestException('Password is too weak');
          }

          const user = await this.usersService.createUser({
          ...Signup,
          password: await AuthService.hashPassword(password),
        });


        const Token = generateRandomToken(32);
        const expiresAt = new Date();
        expiresAt.setMinutes(expiresAt.getMinutes() + 90);
        const tokenKey = `forgot-password-token:${user.email}`;
        const tokenValue = JSON.stringify({ token: Token, expiresAt });
        await this.cacheManager.set(tokenKey, tokenValue, { ttl: 5400 });

        const baseUrl = process.env.BASE_URL;
        const changePasswordUrl = `${baseUrl}/login#/Auth/AuthController_isActive`;

        console.log("token" ,Token)

        const queryParams = `?Token=${Token}&email=${user.email}`;
        const activeUrl = `${changePasswordUrl}${queryParams}`;
        const template = handlebars.compile(fs.readFileSync('src/templates/signUp.html', 'utf8'));
        const emailBody = template({ activeUrl });
       //  const emailBody = `Please click on the following link to registerd your account: <a href="${activeUrl}" target="_blank">${activeUrl}</a>`;

        try
        {
            await this.sendWelcome(user.email, emailBody);
        }

        catch (e)
        {
             throw new BadRequestException('Failed to send email');
        }
        return {
          message: 'Email sent successfully',
      };

    }




       // isActive
      async isActive(@Body() reqBody: userActiveInterface)
      {
           const user = await this.usersService.findUserByEmail(reqBody.email);
           if (!user)
           {
              throw new  NotFoundException('Invalid email');
           }

          const tokenKey = `forgot-password-token:${user.email}`;
          const cachedToken = await this.cacheManager.get(tokenKey);
          if(!cachedToken)
          {
            throw new UnauthorizedException('token expired');
          }

         const parsedToken = JSON.parse(<string>cachedToken);
         if (parsedToken.token !== reqBody.token)
         {
             throw new UnauthorizedException('Invalid token');
         }

         try
         {
           let updatesUser=  await this.usersService.isActive(reqBody.email,reqBody.isActive);
           //await this.sendWelcomeEmail(reqBody.email);
           await this.sendWelcomeEmail(reqBody.email);
           const loginResult = this.login(updatesUser);
         //  await this.cacheManager.del(tokenKey);
           return loginResult;
        }
        catch (e)
        {
          throw new InternalServerErrorException();

       }

  }




        //login
        async login(user: User): Promise<JwtTokensInterface>
        {

          if (user.isActive==false )
          {
            throw new BadRequestException('User is not active');
          }


             const payload = {
                   id: user.id,
                   name: user.name,
                   username: user.username,
                   email: user.email,
                   password: user.password,
                   roles:user.roles,
                  isActive: user.isActive,
            };
           const accessTokenRedis = this.jwtService.sign(payload);
           const accessTokenTTL = 5400;
           await Promise.all([
           this.cacheManager.set( accessTokenRedis, user,{ ttl: accessTokenTTL })]);
           return {
               id:user.id,
               name: user.name,
               username: user.username,
               email: user.email,
               roles:user.roles,
               isActive:user.isActive,
               access_token: accessTokenRedis,

        };
     }



       // forget passwordOtp
    //    async forgotPasswordOtp(
    //          ForgotPasswordOtp:forgotPasswordOtpInterface
    //        ): Promise<{message:string}>
    //    {
    //
    //      const user = await this.usersService.findUserByEmail(ForgotPasswordOtp.email);
    //
    //      if (!user)
    //       {
    //         throw new BadRequestException('Invalid email');
    //       }
    //      const otp = generateRandom(6, true);
    //      const expiresAt = new Date();
    //      expiresAt.setMinutes(expiresAt.getMinutes() + 15);
    //      const otpKey = `forgot-password-otp:${user.email}`;
    //      const otpValue = JSON.stringify({ otp, expiresAt });
    //      await this.cacheManager.set(otpKey, otpValue, { ttl: 900 });
    //
    //     // send the OTP to the user's email
    //      await this.sendOtp(user.email, otp, expiresAt);
    //      return{
    //           message: 'OTP sent successfully'
    //       };
    //  }



       //forgot password
    //    async forgotPassword(
    //      ForgotPassword: forgotPasswordInterface
    //       ): Promise<JwtTokensInterface>
    //   {
    //     const user = await this.usersService.findUserByEmail(ForgotPassword.email);
    //     if (!user)
    //       {
    //        throw new BadRequestException('Invalid email');
    //       }
    //     const otpKey = `forgot-password-otp:${user.email}`;
    //     const cachedOtpValue = await this.cacheManager.get(otpKey);
    //     const cachedOtp = JSON.parse(<string>cachedOtpValue);
    //     const { otp } = cachedOtp;
    //
    //     if (!cachedOtpValue)
    //      {
    //       throw new UnauthorizedException('OTP has expired');
    //      }
    //
    //     if (otp !== ForgotPassword.otp)
    //     {
    //      throw new BadRequestException('OTP not matched');
    //     }
    //
    //    try
    //      {
    //      await this.cacheManager.del(`forget#${ForgotPassword.email}`);
    //      return this.login(user);
    //    }
    //    catch (e)
    //     {
    //     throw new UnauthorizedException('OTP has been expired');
    //     }
    //
    // }



       //email ( random token)
       async token(randomUserToken: randomUserTokenInterface)
       {
           const user = await this.usersService.findUserByEmail(randomUserToken.email);
           if (!user)
           {
              throw new  NotFoundException('Invalid email');
           }

          const resetToken = generateRandomToken(32);
          const expiresAt = new Date();
          expiresAt.setMinutes(expiresAt.getMinutes() + 90);
          const tokenKey = `forgot-password-token:${user.email}`;
          const tokenValue = JSON.stringify({ token: resetToken, expiresAt });
          await this.cacheManager.set(tokenKey, tokenValue, { ttl: 5400 });

          const baseUrl = process.env.BASE_URL;
          const changePasswordUrl = `${baseUrl}/change-password/#/Auth/AuthController_changePasswordToken`;

          console.log("token" ,resetToken)
          // const queryParams = `?resetToken=${resetToken}`;
          const queryParams = `?resetToken=${resetToken}&email=${user.email}`;
          const resetUrl = `${changePasswordUrl}${queryParams}`;
          const template = handlebars.compile(fs.readFileSync('src/templates/resetPassword.html', 'utf8'));
          const emailBody = template({ resetUrl });
         //  const emailBody = `Please click on the following link to reset your password: <a href="${resetUrl}" target="_blank">${resetUrl}</a>`;


         try
          {
              await this.sendToken(user.email, emailBody);
          }
          catch (e)
          {
              throw new BadRequestException('Failed to send email');
          }
         return {
               message: 'Token sent successfully',
               tokenStatus: true
           };
     }




       // change password
        async Password(@Body() reqBody: changeUserPasswordInterface)
        {
            const user = await this.usersService.findUserByEmail(reqBody.email);
            if (!user)
            {
               throw new  NotFoundException('Invalid email');
            }

           const tokenKey = `forgot-password-token:${user.email}`;
           const cachedToken = await this.cacheManager.get(tokenKey);
           if(!cachedToken)
           {
              throw new UnauthorizedException('token expired');
           }

          const parsedToken = JSON.parse(<string>cachedToken);
          if (parsedToken.token !== reqBody.resetToken)
          {
             throw new UnauthorizedException('Invalid token');
          }

          if (reqBody.newPassword !== reqBody.confirmPassword)
          {
             throw new NotAcceptableException('Passwords do not match');
          }
          const isPasswordStrongEnough = reqBody.newPassword.match(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/);
          if (!isPasswordStrongEnough)
          {
             throw new BadRequestException('Password is too weak');
         }

          const hashedPassword = await AuthService.hashPassword(reqBody.newPassword);
          try
          {
             await this.usersService.updatePassword(reqBody.email, hashedPassword);
             await this.sendPasswordUpdatedEmail(reqBody.email);
             const loginResult = this.login(user);
             await this.cacheManager.del(tokenKey);
             return loginResult;
         }
        catch (e)
        {
            throw new InternalServerErrorException('Failed to login');
        }

  }



        //profile get
         async getProfile(accessToken: string)
         {
           const cachedToken = await this.cacheManager.get(accessToken);
           if (!cachedToken)
           {
              throw new UnauthorizedException('Token expired');
           }
              return  cachedToken
         }





          //logout
          async logout(accessToken: string) :Promise<{message:string}>
          {
             const cachedToken = await this.cacheManager.get(accessToken);
             if (!cachedToken)
             {
                throw new NotFoundException('Token expired');
             }
               await this.cacheManager.del(accessToken);
               return { message: 'Successfully logout' };
          }




        // Generating new hashed password to save in database
         private static async hashPassword(password: string): Promise<string>
         {
            const salt = await bcrypt.genSalt();
            return bcrypt.hash(password, salt);
         }


        //used for validation purpose
        async validateUser(email: string, password: string): Promise<User>
        {
            const user = await this.usersService.findUserByEmail(email);
            if (!user)
            {
               throw new  NotFoundException('Invalid email');
            }
            const passwordValid = await bcrypt.compare(password, user.password);
            if (!passwordValid)
            {
               throw new  NotFoundException('Invalid password');
            }

               return user;

        }




        // sending email(signup)
        //  async sendWelcomeEmail(username:string,email: string ,password:string)
        //  {
        //       const template = handlebars.compile(fs.readFileSync('src/templates/welcomeEmail.html', 'utf8'));
        //       const html = template({ username ,email,password });
        //       await this.mailerService.sendMail({
        //       to: email,
        //       subject: 'welcome to love2air',
        //       html: html,
        //    });
        //  }



     async sendWelcomeEmail(email: string )
     {
       const template = handlebars.compile(fs.readFileSync('src/templates/welcomeEmail.html', 'utf8'));
       const html = template({ });
      await this.mailerService.sendMail({
        to: email,
        subject: 'welcome to love2air',
        html: html,
     });
   }






        //sending Otp(changePassword)
        async sendOtp(email: string, otp: string, expiresAt: Date)
        {
            await this.mailerService.sendMail({
            to: email,
            subject: 'Password reset OTP',
            text: `Your OTP for resetting your password is: ${otp}`,
            });
        }



        //sending token(forgotPassword)
        async sendToken(email: string, emailBody: string)
        {
           await this.mailerService.sendMail({
           to: email,
           subject: 'Reset Password',
           html: emailBody,
            });
        }



       //sending password change email
       async sendPasswordUpdatedEmail(email: string)
       {
          const template = handlebars.compile(fs.readFileSync('src/templates/updatePassword.html', 'utf8'));
          const html = template({email});
          await this.mailerService.sendMail({
           to: email,
           subject: 'Password Updated',
           html: html
         });
       }




       //register email
      async sendWelcome(email: string, emailBody: string)
      {
        await this.mailerService.sendMail({
         to: email,
         subject: 'register ',
         html: emailBody,
      });
    }


}





import {
  BadRequestException, Body,
  CACHE_MANAGER,
  Inject,
  Injectable, InternalServerErrorException,
  NotAcceptableException, NotFoundException, UnauthorizedException
} from "@nestjs/common";
import { SignUpUserDto } from "./dto/signup-user.dto";
import {UsersService} from "../users/users.service";
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from "../users/schemas/user.schema";
import { Cache } from 'cache-manager';
import {MailerService} from "@nestjs-modules/mailer";
import { generateRandom } from "../../helpers/string.helper";
import ForgotPasswordDto from "./dto/forgot-password.dto";
import { ChangeUserPasswordDto } from "./dto/change-user-password.dto";


@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private readonly mailerService: MailerService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {
  }

  // Sign up
      async signup(signUpUserDto: SignUpUserDto) {
      const username = await this.usersService.findUserByUsername(signUpUserDto.username);
      if (username)
      {
      throw new BadRequestException('Username already exists');
      }
      const email = await this.usersService.findUserByEmail(signUpUserDto.email);
      if (email)
      {
      throw new BadRequestException('Email already exists');
      }
      const { password } = signUpUserDto;
      const user = await this.usersService.createUser({
      ...signUpUserDto,
      password: await AuthService.hashPassword(password),
      });
      // Send welcome email to new user
      await this.sendWelcomeEmail(user.email);
      return user;
  }

    //login
      async login(user: User) {
      const payload =
      {
        username: user.username, email: user.email
      };
       const accessTokenRedis = this.jwtService.sign(payload);
       const accessTokenTTL = 900;
       await Promise.all([
       this.cacheManager.set(accessTokenRedis, user, { ttl: accessTokenTTL }),
      ]);
      return {
       access_token: accessTokenRedis
      };
  }

    // forget passwordOtp
       async forgotPasswordOtp(email: string): Promise<{ message: string }>
       {
        const user: any = await this.usersService.findUserByEmail(email);
        if (!user)
       {
        throw new BadRequestException('Invalid email');
       }
        const otp = generateRandom(6, true);
        const expiresAt = new Date();
        expiresAt.setMinutes(expiresAt.getMinutes() + 15);

        const otpKey = `forgot-password-otp:${user.email}`;
        const otpValue = JSON.stringify({ otp, expiresAt });
        await this.cacheManager.set(otpKey, otpValue, { ttl: 900 });
        // send the OTP to the user's email
        await this.sendOtp(user.email, otp, expiresAt);
        return{
        message: 'OTP sent successfully'
    };
  }

    //forgot password
      async forgotPassword(reqBody: ForgotPasswordDto)
      {
       const user = await this.usersService.findUserByEmail(reqBody.email);
       if (!user)
       {
       throw new BadRequestException('Invalid email');
       }
       const otpKey = `forgot-password-otp:${user.email}`;
       const cachedOtpValue = await this.cacheManager.get(otpKey);
       const cachedOtp = JSON.parse(<string>cachedOtpValue);
       const { otp } = cachedOtp;
      if (!cachedOtpValue)
      {
      throw new UnauthorizedException('OTP has expired');
      }
       if (otp !== reqBody.otp)
      {
        throw new BadRequestException('OTP not matched');
      }
      try
      {
         await this.cacheManager.del(`forget#${reqBody.email}`);
         return this.login(user);
      }
      catch (e: any)
      {
        throw new UnauthorizedException('OTP has been expired');
      }

  }

    //profile get
      async getProfile(accessToken: string) {
      const cachedToken = await this.cacheManager.get(accessToken);
      if (!cachedToken)
      {
      throw new UnauthorizedException('Token expired');
      }
      return cachedToken
  }

    //change password
      async changePassword(@Body() reqBody: ChangeUserPasswordDto, accessToken: string) {
      const cachedToken = await this.cacheManager.get(accessToken);
      if (!cachedToken)
      {
      throw new UnauthorizedException('Token expired');
      }
      const user = await this.usersService.findUserByEmail(reqBody.email);
      if (!user)
      {
      throw new NotFoundException('Invalid User');
      }
      else
     {
         if (reqBody.newPassword !== reqBody.confirmPassword)
         {
        throw new NotAcceptableException('Password not matched');
         }
         if (reqBody.newPassword === reqBody.confirmPassword)
        {
        const hashedPassword = await AuthService.hashPassword(reqBody.newPassword);
        await this.usersService.updatePassword( reqBody.email, hashedPassword);
        }
      return { message: "Password successfully updated." };
    }
  }

   //logout
     async logout(accessToken: string) {
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
     async validateUser(username: string, password: string): Promise<User> {
     const user = await this.usersService.findUserByUsername(username);
     if (!user)
     {
      throw new UnauthorizedException('Invalid username');
     }
     const passwordValid = await bcrypt.compare(password, user.password);
     if (!passwordValid)
     {
      throw new UnauthorizedException('Invalid password');
     }
     return user;
  }

     // sending email
     async sendWelcomeEmail(email: string) {
     await this.mailerService.sendMail({
      to: email,
      subject: 'Welcome to boilerplate!',
      text: 'Thank you for signing up for boilerplate',
    });
  }

     //sending Otp
      async sendOtp(email: string, otp: string, expiresAt: Date) {
      await this.mailerService.sendMail({
      to: email,
      subject: 'Password reset OTP',
      text: `Your OTP for resetting your password is: ${otp}`,
    });
  }

}

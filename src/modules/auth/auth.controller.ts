import {
  Controller,
  Post,
  Body,
  UseGuards,
  Request,
  Get,
  Delete, Put
} from "@nestjs/common";
import { AuthService } from './auth.service';
import { SignUpUserDto } from "./dto/signup-user.dto";
import { ApiBearerAuth, ApiBody, ApiTags } from "@nestjs/swagger";
import {LoginUserDto} from "./dto/login-user.dto";
import { LocalAuthGuard } from "./guards/local-auth-guard";
import { JwtAuthGuard } from "./guards/jwt-auth-guard";
import {ForgotPasswordOtpDto} from "./dto/forgot-password-otp.dto";
import {ForgotPasswordDto} from "./dto/forgot-password.dto";
import { ChangeUserPasswordDto } from "./dto/change-user-password.dto";
import JwtTokensInterface from "../../interfaces/jwt-token.interfac";
import { User } from "../users/schemas/user.schema";
import {randomUserTokenDto} from "./dto/random-user-token.dto";


@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}

      // Sign up
       @ApiBody({type:SignUpUserDto})
       @Post('signup')
       async signup(
         @Body() signUpUserDto: SignUpUserDto
         ):Promise<User>
         {
          return this.authService.signup(signUpUserDto);
         }


      // login
       @ApiBody({ type: LoginUserDto })
       @UseGuards(LocalAuthGuard)
       @Post('login')
       async login(
         @Request() req
        ):Promise<JwtTokensInterface>
         {
           return this.authService.login(req.user);
         }


      //forget password otp
       @ApiBody({type:ForgotPasswordOtpDto})
       @Post('forgotPassword/otp')
       async forgotPasswordOtp(
          @Body() forgotPasswordOtpDto: ForgotPasswordOtpDto
          ): Promise<{message:string}>
         {
           return this.authService.forgotPasswordOtp(forgotPasswordOtpDto);
         }


        //forget password
        @ApiBody({type:ForgotPasswordDto})
        @Put('forgotPassword')
        async forgotPassword(
          @Body() ForgotPassword: ForgotPasswordDto
           ): Promise<JwtTokensInterface>
         {
           return this.authService.forgotPassword(ForgotPassword);
         }


        //change password
        @ApiBody({type:ChangeUserPasswordDto})
        @ApiBearerAuth()
        @UseGuards(JwtAuthGuard)
        @Put('changePassword')
        async changePassword(
         @Body() reqBody: ChangeUserPasswordDto,
        @Request() req,
         ): Promise<{message:string}>
         {
           const authHeader = req.headers.authorization;
           const accessToken = authHeader.split(' ')[1];
          return this.authService.changePassword(reqBody, accessToken);
         }



        //email ( random token)
        @ApiBody({type:randomUserTokenDto})
        @Post('forgotPassword/token')
        async token(
         @Body() randomUserToken: randomUserTokenDto)
         {
          return this.authService.token(randomUserToken);
         }

       //  forgotPassword(token)
         @ApiBody({type:ChangeUserPasswordDto})
         @ApiBearerAuth()
         @Put('forgotPassword/token')
         async changePasswordToken(
         @Body() reqBody: ChangeUserPasswordDto,
         @Request() req)
         {
           const authHeader = req.headers.authorization;
           const accessToken = authHeader.split(' ')[1];
           return this.authService.Password(reqBody, accessToken);
         }



     //profile get
        @ApiBearerAuth()
        @UseGuards(JwtAuthGuard)
        @Get('/profile')
        async getProfile(@Request() req)
         {
          const accessToken = req.headers.authorization.split(' ')[1];
          return this.authService.getProfile(accessToken);
         }


     //logout
       @ApiBearerAuth()
       @UseGuards(JwtAuthGuard)
       @Delete('/logout')
       async logout(
        @Request() req
         ): Promise<{message:string}>
       {
        const accessToken = req.headers.authorization.split(' ')[1];
        return this.authService.logout(accessToken);
       }


}

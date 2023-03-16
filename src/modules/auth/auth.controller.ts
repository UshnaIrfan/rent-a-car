import {
  Controller,
  Post,
  Body,
  UseGuards,
  Request,
  Get,
  Delete, Put, HttpStatus, HttpException
} from "@nestjs/common";
import { AuthService } from './auth.service';
import { SignUpUserDto } from "./dto/signup-user.dto";
import { ApiBearerAuth, ApiBody, ApiTags } from "@nestjs/swagger";
import LoginUserDto from "./dto/login-user.dto";
import { LocalAuthGuard } from "./guards/local-auth-guard";
import { JwtAuthGuard } from "./guards/jwt-auth-guard";
import ForgotPasswordOtpDto from "./dto/forgot-password-otp.dto";
import ForgotPasswordDto from "./dto/forgot-password.dto";
import { ChangeUserPasswordDto } from "./dto/change-user-password.dto";

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}

  // Sign up
    @Post('signup')
     async signup(@Body() signUpUserDto: SignUpUserDto) {
    return this.authService.signup(signUpUserDto);
    }

  // login
    @ApiBody({ type: LoginUserDto })
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
    return this.authService.login(req.user);
  }

  //forget password otp
      @Post('forgotPassword/otp')
      async forgotPasswordOtp(@Body() reqBody: ForgotPasswordOtpDto): Promise<any> {
      return this.authService.forgotPasswordOtp(reqBody.email);
     }

  //forget password
     @Put('forgotPassword')
     async forgotPassword(@Body() reqBody: ForgotPasswordDto): Promise<any> {
     return this.authService.forgotPassword(reqBody);
  }

  //change password
      @ApiBearerAuth()
      @UseGuards(JwtAuthGuard)
      @Put('/changePassword')
      async changePassword(
      @Body() reqBody: ChangeUserPasswordDto,
      @Request() req,
       ): Promise<any> {
      const authHeader = req.headers.authorization;
      const accessToken = authHeader.split(' ')[1];
      return this.authService.changePassword(reqBody, accessToken);
  }

  //profile get
      @ApiBearerAuth()
      @UseGuards(JwtAuthGuard)
      @Get('/profile')
      async getProfile(@Request() req) {
      const accessToken = req.headers.authorization.split(' ')[1];
      return this.authService.getProfile(accessToken);
      }

  //logout
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Delete('/logout')
    async logout(@Request() req) {
    const accessToken = req.headers.authorization.split(' ')[1];
    return this.authService.logout(accessToken);
  }
}

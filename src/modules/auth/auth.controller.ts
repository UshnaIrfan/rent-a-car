import {
  Controller,
  Post,
  Body,
  UseGuards,
  Request,
  Get,
  Delete, Put, Patch, Param, Query
} from "@nestjs/common";
import { AuthService } from './auth.service';
import { SignUpUserDto } from "./dto/signup-user.dto";
import { ApiBearerAuth, ApiBody, ApiTags } from "@nestjs/swagger";
import {LoginUserDto} from "./dto/login-user.dto";
import { LocalAuthGuard } from "./guards/local-auth-guard";
import { JwtAuthGuard } from "./guards/jwt-auth-guard";
import { ChangeUserPasswordDto } from "./dto/change-user-password.dto";
import JwtTokensInterface from "../../interfaces/jwt-token.interfac";
import {randomUserTokenDto} from "./dto/random-user-token.dto";
import {userActiveDto} from "./dto/user-active.dto";
import { User } from "../users/schemas/user.schema";


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
        @Body() signUpUserDto: SignUpUserDto)
        {
            return this.authService.signup(signUpUserDto);
        }



        // is active
        @ApiBody({type:userActiveDto})
        @Patch('active')
        async isActive(
        @Body() userActivedto: userActiveDto)
        {
           return this.authService.isActive(userActivedto);
        }



        // login
        @ApiBody({ type: LoginUserDto })
        @UseGuards(LocalAuthGuard)
        @Post('login')
        async login(@Request() req):Promise<JwtTokensInterface>
        {
           return this.authService.login(req.user);
        }




        //email ( random token)
        @ApiBody({type:randomUserTokenDto})
        @Post('forgotPassword/token')
        async otp(
        @Body() randomUserToken: randomUserTokenDto)
        {
          return this.authService.otp(randomUserToken);
        }



        //change password
        @ApiBody({type:ChangeUserPasswordDto})
        @Put('changePassword')
        async changePasswordToken(
        @Body() reqBody: ChangeUserPasswordDto)
        {
          return this.authService.Password(reqBody);
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



        // get user by id
        @Get('/:user_id')
        async  getUserById(@Param('user_id') userId:string):Promise<User>
        {
           return this.authService.getUserById(userId);
        }



        // get all users
        @Get('/users/:all_users')
        async  getAllUser():Promise<User[]>
        {
            return this.authService.getAllUser();
        }




        //logout
        @ApiBearerAuth()
        @UseGuards(JwtAuthGuard)
        @Delete('/logout')
        async logout(@Request() req): Promise<{message:string}>
        {
           const accessToken = req.headers.authorization.split(' ')[1];
           return this.authService.logout(accessToken);
        }




        // refresh token
        @ApiBearerAuth()
        @UseGuards(JwtAuthGuard)
        @Get('/refresh/token')
        async refreshToken(@Request() req)
        {
           const accessToken = req.headers.authorization.split(' ')[1];
           return  this.authService.refreshToken(req.user,accessToken)
        }






        //verify email
      //  @Get('/verify_email')
      //  async verifyEmail(
      //      @Param('token') token: string,
      //      @Query('email') email: string)
      // {
      //     return this.authService.verifyEmail(token,email);
      // }



}

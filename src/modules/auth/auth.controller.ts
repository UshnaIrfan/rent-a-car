import {
  Controller,
  Post,
  Body,
  UseGuards,
  Request,
  Get,
  Delete, Put, Patch, Param,
} from "@nestjs/common";
import { SignUpUserDto } from "./dto/signup-user.dto";
import { ApiBearerAuth, ApiBody, ApiTags } from "@nestjs/swagger";
import {LoginUserDto} from "./dto/login-user.dto";
import { LocalAuthGuard } from "./guards/local-auth-guard";
import { JwtAuthGuard } from "./guards/jwt-auth-guard";
import { ChangeUserPasswordDto } from "./dto/change-user-password.dto";
import JwtTokensInterface from "./interfaces/jwt-token.interface";
import {randomUserTokenDto} from "./dto/random-user-token.dto";
import {userActiveDto} from "./dto/user-active.dto";
import { User } from "../users/schemas/user.schema";
import {changeUserPasswordTokenVerificationDto} from "./dto/change-user-password-token-verification.dto";
import AuthBearer from "../../decorators/auth-bearer.decorators";
import { AuthService } from "./auth.service";

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService) {}


        // Sign up
        @ApiBody({type:SignUpUserDto})
        @Post('signup')
        async signup(
        @Body() signUpUserDto: SignUpUserDto)
        {
            return this.authService.signup(signUpUserDto);
        }



        // user update ( active status)
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



        //email (token)
        @ApiBody({type:randomUserTokenDto})
        @Post('forgotPassword/token')
        async token(@Body() randomUserToken: randomUserTokenDto)
        {
             return this.authService.token(randomUserToken);
        }



       //change user password token verification
       @ApiBody({type:changeUserPasswordTokenVerificationDto})
       @Post('changePassword/token_verification')
       async tokenVerification(@Body() body: changeUserPasswordTokenVerificationDto)
       {
            return this.authService.tokenVerification(body);
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
        async getProfile(@AuthBearer() accessToken: string)
        {
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
        async logout(@AuthBearer() accessToken: string): Promise<{message:string}>
        {
           return this.authService.logout(accessToken);
        }



        // refresh token
        @ApiBearerAuth()
        @UseGuards(JwtAuthGuard)
        @Get('/refresh/token')
        async refreshToken(@Request() req, @AuthBearer() accessToken: string)
        {
           return  this.authService.refreshToken(req.user,accessToken)
        }


}

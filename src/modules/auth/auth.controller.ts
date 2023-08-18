import {
  Controller,
  Post,
  Body,
  UseGuards,
  Request,
  Get,
  Delete,
  Put,
  Patch,
  Param,
  Req,
  HttpStatus, UnauthorizedException
} from "@nestjs/common";
import { SignUpUserDto } from "./dto/signup-user.dto";
import { ApiBearerAuth, ApiBody, ApiTags } from "@nestjs/swagger";
import {LoginUserDto} from "./dto/login-user.dto";
import { LocalAuthGuard } from "./guards/local-auth-guard";
import { JwtAuthGuard } from "./guards/jwt-auth-guard";
import { ChangeUserPasswordDto } from "./dto/change-user-password.dto";
import JwtTokensInterface from "./interfaces/jwt-token.interface";
import {randomUserTokenDto} from "./dto/random-user-token.dto";
import { User } from "../users/schemas/user.schema";
import {changeUserPasswordTokenVerificationDto} from "./dto/change-user-password-token-verification.dto";
import AuthBearer from "../../decorators/auth-bearer.decorators";
import { AuthService } from "./auth.service";
import { GoogleAuthGuard } from "./guards/google-auth-guard";
import { userOtpActiveDto } from "./dto/user-otp-active.dto";
import { SignupUserDocumentDto } from "./dto/signup-user-document.dto";


@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}



        // Sign up
        @ApiBody({type:SignUpUserDto})
        @Post('signup')
        async signup(@Body() signUpUserDto: SignUpUserDto)
        {
            return this.authService.signup(signUpUserDto);
        }




       //  international user document passport
        @ApiBody({type:SignupUserDocumentDto})
        @Post('/international/user_document_passport')
        async internationalUserDocumentPassport(@Body() body:SignupUserDocumentDto )
        {
            return this.authService.UserDocument(body);
        }



        //  international user document visa
        @ApiBody({type:SignupUserDocumentDto})
        @Post('/international/user_document_visa')
        async internationalUserDocumentVisa(@Body() body:SignupUserDocumentDto )
        {
            return this.authService.UserDocument(body);
        }



       //  international user driving license
        @ApiBody({type:SignupUserDocumentDto})
        @Post('/international/user_document_driving_license')
        async internationalUserDocumentDrivingLicense(@Body() body:SignupUserDocumentDto )
        {
            return this.authService.UserDocument(body);
        }


        //  international user driving permit
        @ApiBody({type:SignupUserDocumentDto})
        @Post('/international/user_document_driving_permit')
        async internationalUserDocumentDrivingPermit(@Body() body:SignupUserDocumentDto )
        {
            return this.authService.UserDocument(body);
        }




        //  local user document passport
        @ApiBody({type:SignupUserDocumentDto})
        @Post('/local/user_document_passport')
        async localUserDocumentPassport(@Body() body:SignupUserDocumentDto )
        {
            return this.authService.UserDocument(body);
        }



        //  local user driving license
        @ApiBody({type:SignupUserDocumentDto})
        @Post('/local/user_document_driving_license')
        async localUserDocumentDrivingLicense(@Body() body:SignupUserDocumentDto )
        {
          return this.authService.UserDocument(body);
        }





        // user update ( otp active status)
        @ApiBody({type:userOtpActiveDto})
        @Patch('Otp_active')
        async isOtpActive(@Body() userOtpActivedto: userOtpActiveDto)
        {
            return this.authService.isOtpActive(userOtpActivedto);
        }




        // login
        @ApiBody({ type: LoginUserDto })
        @UseGuards(LocalAuthGuard)
        @Post('login')
        async login(@Request() req):Promise<JwtTokensInterface>
        {
           return this.authService.login(req.user);
        }


        //profile get
        @ApiBearerAuth()
        @UseGuards(JwtAuthGuard)
        @Get('profile')
        async getProfile(@AuthBearer() accessToken: string)
        {
            return this.authService.getProfile(accessToken);
        }


        // sign up with google
         @Get('google')
         @UseGuards(GoogleAuthGuard)
         async googleAuth(@Req() req)
         {
               return
         }



           // get data from google ( signup)
         @Get('google/callback')
         @UseGuards(GoogleAuthGuard)
         googleAuthRedirect(@Req() req)
         {
              return this.authService.googleLogin(req)
         }



          // get user by id
          @Get('/:user_id')
          async  findUserById(@Param('user_id') userId:string): Promise<User>
          {
               return this.authService.findUserById(userId);
          }




          // get all users
          @Get('/users/:all_users')
          async  getAllUser(): Promise<User[]>
          {
               return this.authService.getAllUser();
          }




           // refresh token
          @ApiBearerAuth()
          @UseGuards(JwtAuthGuard)
          @Get('/refresh/token')
          async refreshToken(@Request() req, @AuthBearer() accessToken: string)
          {
              return  this.authService.refreshToken(req.user,accessToken)
          }





           //logout
          @ApiBearerAuth()
          @UseGuards(JwtAuthGuard)
          @Delete('/logout')
          async logout(@AuthBearer() accessToken: string): Promise<{message:string}>
          {
              return this.authService.logout(accessToken);
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
         async changePassword(@Body() reqBody: ChangeUserPasswordDto)
         {
              return this.authService.changePassword(reqBody);
         }












  // // apple
  //  @Get()
  //  @UseGuards(AuthGuard('apple'))
  //  async Login(): Promise<any>
  //  {
  //    return HttpStatus.OK;
  //  }
  //
  //
  //  @Post('/redirect')
  //  async redirect(@Body() payload): Promise<any>
  //  {
  //    if (payload.id_token)
  //    {
  //      return this.authService.registerByIDtoken(payload);
  //    }
  //     throw new UnauthorizedException('Unauthorized');
  //  }










}

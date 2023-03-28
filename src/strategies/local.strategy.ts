import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from "@nestjs/common";
import {AuthService} from "../modules/auth/auth.service";
import { User } from "../modules/users/schemas/user.schema";


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService ) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    });
  }

  // async validate(username: string, password: string): Promise<any> {
  //   try {
  //     const user = await this.authService.validateUser(username, password);
  //     return user;
  //   }
  //   catch (error)
  //   {
  //     throw new UnauthorizedException(error.message);
  //   }
  // }

     async validate(email: string, password: string): Promise< User>
     {
       try
       {
        const user = await this.authService.validateUser(email, password);
        return user;
       }
      catch (error)
      {
       throw new UnauthorizedException(error.message);
      }
   }

}



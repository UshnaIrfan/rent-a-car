import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import {AuthService} from "../modules/auth/auth.service";
import { User } from "../modules/users/schemas/user.schema";



@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
      passwordField: 'password',

    });
  }

     async validate(email: string, password: string): Promise< User>
     {
       try
       {
        const user = await this.authService.validateUser(email, password);
        return user;
       }
       catch (error)
       {
          if (error.message === 'Invalid email')
          {
             throw new NotFoundException('Invalid email');
          }
          else if (error.message === 'Invalid password')
          {
            throw new NotFoundException('Invalid password');
          }
       }
    }

}



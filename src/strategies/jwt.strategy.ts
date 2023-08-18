import { Injectable, UnauthorizedException } from "@nestjs/common";
import {jwtConstants} from "../modules/auth/constants/constants";
import { AuthService } from "../modules/auth/auth.service";
import { User } from "../modules/users/schemas/user.schema";
import {UsersService} from "../modules/users/users.service";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
   constructor(private authService: AuthService,
               private userService: UsersService) {
      super({
         jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
         ignoreExpiration: false,
         secretOrKey: jwtConstants.secret,
    });
  }


      async validate(payload: any): Promise<User>
      {
        console.log('HER',payload)
          const user = await this.userService.findUserByFirstName(payload.firstName);
          if (!user)
          {
              throw new UnauthorizedException("Invalid user");
          }
          console.log(user)
          if (user.email !== payload.email)
          {
              throw new UnauthorizedException("Invalid email");
          }
           return user;
      }

}
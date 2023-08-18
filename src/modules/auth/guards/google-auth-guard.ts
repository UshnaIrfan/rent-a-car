import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class GoogleAuthGuard extends AuthGuard("google") {
  handleRequest(err: any, user: any) {
    if (err || !user) {
      throw new UnauthorizedException(err.message, { cause: err });
    }
    return user;
  }
}
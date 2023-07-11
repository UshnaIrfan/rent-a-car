import { Module ,CacheModule } from "@nestjs/common";
import * as redisStore from "cache-manager-redis-store";
import {UsersService} from "../users/users.service";
import { UsersModule } from "../users/users.module";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import {jwtConstants} from "./constants/constants";
import {LocalStrategy} from "../../strategies/local.strategy";
import {JwtAuthGuard} from "./guards/jwt-auth-guard";
import {JwtStrategy} from "../../strategies/jwt.strategy";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";

@Module({
  imports: [
     UsersModule,
     PassportModule,
     CacheModule.register({
      store: redisStore,
      uri: process.env.REDIS_URL,
    }),
      JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '90m' },
    }),
  ],
     controllers: [AuthController],
     providers: [AuthService ,UsersService ,LocalStrategy ,JwtAuthGuard ,JwtStrategy ] ,
     exports: [AuthService],
})
export class AuthModule {}

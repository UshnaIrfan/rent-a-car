import { Module  } from "@nestjs/common";
import * as redisStore from "cache-manager-redis-store";
import {UsersService} from "../users/users.service";
import { UsersModule } from "../users/users.module";
import { PassportModule } from "@nestjs/passport";
import { JwtModule, JwtService } from "@nestjs/jwt";
import {LocalStrategy} from "../../strategies/local.strategy";
import {JwtAuthGuard} from "./guards/jwt-auth-guard";
import {JwtStrategy} from "../../strategies/jwt.strategy";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { CacheModule } from "@nestjs/common/cache";
import { TwilioModule } from "nestjs-twilio";
import { UserDocumentsService } from "../user-documents/user-documents.service";
import { userVerificationsDocumentsService } from "../user-verifications-documents/user-verifications-documents.service";
import { jwtConstants } from "./constants/constants";
import { MailService } from "../mail/mail.service";
import { cacheRepository } from "../../cache/cache.repository";


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

    TwilioModule.forRoot({
      accountSid: process.env.TWILIO_ACCOUNT_SID,
      authToken: process.env.TWILIO_AUTH_TOKEN,
    }),

  ],
     controllers: [AuthController],
     providers: [cacheRepository,MailService,LocalStrategy,JwtAuthGuard,JwtStrategy,userVerificationsDocumentsService,UserDocumentsService,AuthService ,UsersService ,LocalStrategy ,JwtAuthGuard ,JwtStrategy ] ,
     exports: [AuthService],
})
export class AuthModule {}

import * as redisStore from "cache-manager-redis-store";
import {envSchema} from "./config/schema/env.schema";
import {ConfigModule,ConfigService} from "@nestjs/config";
import {AuthModule} from "./modules/auth/auth.module";
import {UsersModule} from "./modules/users/users.module";
import { MailerModule } from "@nestjs-modules/mailer";
import {  Module } from "@nestjs/common";
import { User } from "./modules/users/schemas/user.schema";
import { TypeOrmModule } from "@nestjs/typeorm";
import {GoogleStrategy} from "./strategies/google-auth-strategy";
import { HubspotModule } from './modules/hubspot/hubspot.module';
import { CacheModule } from "@nestjs/common/cache";
import { TwilioModule } from 'nestjs-twilio';
import { UserDocuments } from "./modules/users/schemas/user-document.schema";
import { UserVerificationDocuments } from "./modules/users/schemas/user-verification-document.schema";
import { join } from "path";
import { ServeStaticModule } from "@nestjs/serve-static";


@Module({
  imports: [
    AuthModule,
    UsersModule,
    HubspotModule,


    TwilioModule.forRoot({
      accountSid: process.env.TWILIO_ACCOUNT_SID,
      authToken: process.env.TWILIO_AUTH_TOKEN,
    }),

    ConfigModule.forRoot(
      {
        cache: true,
        isGlobal: true,
        expandVariables: true,
        envFilePath: [".env"],
        validationSchema: envSchema
      }),



    // mailer module
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        transport: {
          host: configService.get("MAILER_HOST"),
          port: 465,
          auth: {
            user: configService.get("MAIL_USER"),
            pass: configService.get("MAILER_PASSWORD")
          }
        },
        defaults: {
          from: configService.get("MAIL_FROM")
        },
        preview: true
      }),
      inject: [ConfigService]
    }),


    // redis
    CacheModule.register({ store: redisStore, uri: process.env.REDIS_URL }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../'),
      renderPath: '/asset',
    }),

    // Database connection
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: "postgres",
        host: configService.get("DATABASE_HOST"),
        port: parseInt(configService.get("DATABASE_PORT"), 10),
        username: configService.get("DATABASE_USERNAME"),
        password: configService.get("DATABASE_PASSWORD"),
        database: configService.get("DATABASE_NAME"),
        entities: [User,UserDocuments,UserVerificationDocuments],
        synchronize: true,
      }),
      inject: [ConfigService]
    }),
  ],
     controllers: [],
     providers: [GoogleStrategy],
})
export class AppModule {}

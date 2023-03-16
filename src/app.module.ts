import { Module,CacheModule } from '@nestjs/common';
import * as redisStore from 'cache-manager-redis-store';
import {envSchema} from "./config/schema/env.schema";
import { ConfigModule ,ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import {AuthModule} from "./modules/auth/auth.module";
import {UsersModule} from "./modules/users/users.module";
import { MailerModule } from "@nestjs-modules/mailer";

@Module({
  imports: [
    AuthModule,
    UsersModule,

    // mailer module
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        auth: {
          user: 'ushnairfan12345@gmail.com',
          pass: 'uoixkwdbhghnvvfo'
        }
      }
    }),

    // redis
    CacheModule.register({
      store: redisStore,
      uri: process.env.REDIS_URL,
    }),

    // Database connection
     ConfigModule.forRoot(
      {
        cache: true,
        isGlobal: true,
        expandVariables: true,
        envFilePath: ['.env'],
        validationSchema: envSchema,
      }),
      MongooseModule.forRootAsync({
         imports: [ConfigModule],
        useFactory: (configService: ConfigService) => ({
        uri: configService.get('MONGO_URI'),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

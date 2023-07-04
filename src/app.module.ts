import { Module,CacheModule } from '@nestjs/common';
import * as redisStore from 'cache-manager-redis-store';
import {envSchema} from "./config/schema/env.schema";
import { ConfigModule ,ConfigService } from '@nestjs/config';
import {AuthModule} from "./modules/auth/auth.module";
import {UsersModule} from "./modules/users/users.module";
import { MailerModule } from "@nestjs-modules/mailer";
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from './modules/categories/categories.module';
import { SellerModule } from './modules/sellers/seller.module';
import { seller } from "./modules/sellers/schemas/seller.schema";
import { User } from "./modules/users/schemas/user.schema";
import { category } from "./modules/categories/schemas/category.schema";
import { ContactUsModule } from './modules/contact-us/contact-us.module';
import {contact} from "./modules/contact-us/schemas/contact-us.schema";
import { ReviewModule } from './modules/review/review.module';
import {review} from "./modules/review/schemas/submit-review.schema";
import {clicksTypes} from "./modules/review/schemas/create-click-types.schema";
import {clicksTitle} from "./modules/review/schemas/create-clicks-titles.schema";
import {likeDislike} from "./modules/review/schemas/like-dislike.schema";
import { AdminModule } from './modules/admin/admin.module';
import * as AWS from 'aws-sdk';
import {emailGeneralModule} from "./modules/email-general/email-general.module";
import { MailchipModule } from './modules/mailchip/mailchip.module';
import {mailChip} from "./modules/mailchip/schemas/mailchip.schema";
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
     AuthModule,
     UsersModule,
     CategoriesModule,
     SellerModule,
     ContactUsModule,
     ReviewModule,
     AdminModule,
     emailGeneralModule,
     MailchipModule,

    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../'),
      renderPath: '/asset',
    }),
    ConfigModule.forRoot(
      {
        cache: true,
        isGlobal: true,
        expandVariables: true,
        envFilePath: ['.env'],
        validationSchema: envSchema,
      }),


     // mailer module
      MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        transport: {
          SES: new AWS.SES({
            region: configService.get('AWS_SES_REGION'),
            accessKeyId: configService.get('AWS_SES_ACCESS_KEY'),
            secretAccessKey: configService.get('AWS_SES_KEY_SECRET'),
          }),

          host: configService.get('AWS_SES_SMTP_HOST'),
          port: configService.get('AWS_SES_SMTP_PORT'),
          secure: false,
          ignoreTLS:true,
          requireTLS:false,
          auth: {
             user: configService.get('AWS_SES_SMTP_USER_NAME'),
             pass: configService.get('AWS_SES_SMTP_USER_PASSWORD'),
          },
        },

        defaults: {
          from: configService.get('SMTP_EMAIL'),
        },
            preview: true,
        }),

          inject: [ConfigService],
      }),



         // redis
         CacheModule.register({
         store: redisStore,
          uri: process.env.REDIS_URL,
        }),



       // Database connection
      TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DATABASE_HOST'),
        port: parseInt(configService.get('DATABASE_PORT'), 10),
        username: configService.get('DATABASE_USERNAME'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        entities: [User,category,seller,contact,review,clicksTypes,clicksTitle,likeDislike,mailChip],
        synchronize: true,
      }),
        inject: [ConfigService],
    }),

  ],
     controllers: [],
     providers: [],
})
export class AppModule {}

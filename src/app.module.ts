import { Module,CacheModule } from '@nestjs/common';
import * as redisStore from 'cache-manager-redis-store';
import {envSchema} from "./config/schema/env.schema";
import { ConfigModule ,ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import {AuthModule} from "./modules/auth/auth.module";
import {UsersModule} from "./modules/users/users.module";
import { MailerModule } from "@nestjs-modules/mailer";
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from "./modules/users/schemas/user.schema";
import { CategoriesModule } from './modules/categories/categories.module';
import {category} from "./modules/categories/schemas/category.schema";
import { SellerModule } from './modules/sellers/seller.module';
import {seller} from "./modules/sellers/schemas/seller.schema";

@Module({
  imports: [
    AuthModule,
    UsersModule,
    CategoriesModule,
    SellerModule,

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
          host: configService.get('MAILER_HOST'),
          auth: {
            user: configService.get('MAILER_USERNAME'),
            pass: configService.get('MAILER_PASSWORD'),
          },
        },
      }),
      inject: [ConfigService],
    }),


    // redis
     CacheModule.register({
      store: redisStore,
      uri: process.env.REDIS_URL,
    }),


    // Database connection

    //   MongooseModule.forRootAsync({
//      imports: [ConfigModule],
//     useFactory: (configService: ConfigService) => ({
//     uri: configService.get('MONGO_URI'),
//   }),
//   inject: [ConfigService],
// }),

     TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DATABASE_HOST'),
        port: parseInt(configService.get('DATABASE_PORT'), 10),
        username: configService.get('DATABASE_USERNAME'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        entities: [User ,category ,seller],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),

  ],

     controllers: [],
     providers: [],
})
export class AppModule {}

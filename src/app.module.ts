import * as redisStore from "cache-manager-redis-store";
import {envSchema} from "./config/schema/env.schema";
import {ConfigModule,ConfigService} from "@nestjs/config";
import {AuthModule} from "./modules/auth/auth.module";
import {UsersModule} from "./modules/users/users.module";
import { MailerModule } from "@nestjs-modules/mailer";
import {  Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {GoogleStrategy} from "./strategies/google-auth-strategy";
import { HubspotModule } from './modules/hubspot/hubspot.module';
import { CacheModule } from "@nestjs/common/cache";
import { TwilioModule } from 'nestjs-twilio';
import { join } from "path";
import { ServeStaticModule } from "@nestjs/serve-static";
import { CarModule } from './modules/car/car.module';
import { DriverModule } from './modules/driver/driver.module';
import { UserDocumentsModule } from './modules/user-documents/user-documents.module';
import { UserVerificationsDocumentsModule } from "./modules/user-verifications-documents/user-verifications-documents.module";
import { UserDocuments } from "./modules/user-documents/schemas/userDocuments.schema";
import { User } from "./modules/users/schemas/user.schema";
import { driver } from "./modules/driver/schemas/driver.schema";
import { car } from "./modules/car/schemas/car.schema";
import {
  UserVerificationDocuments
} from "./modules/user-verifications-documents/schemas/userVerificationDocumets.schema";
import { BrandModule } from './modules/brand/brand.module';
import { CarModelModule } from './modules/car-model/car-model.module';
import { YearModule } from './modules/year/year.module';
import { ColorModule } from './modules/color/color.module';
import { TransmissionModule } from './modules/transmission/transmission.module';
import { CarTypeModule } from './modules/car-type/car-type.module';
import { BaggageOptionModule } from './modules/baggage-option/baggage-option.module';
import { SeatsCapacityModule } from './modules/seats-capacity/seats-capacity.module';
import { DriverOptionModule } from './modules/driver-option/driver-option.module';
import { year } from "./modules/year/schemas/year.schema";
import { seatsCapacity } from "./modules/seats-capacity/schemas/seats-capacity.schema";
import { driverOption } from "./modules/driver-option/schemas/driver-option.schema";
import { color } from "./modules/color/schemas/color.schema";
import { carType } from "./modules/car-type/schemas/car-type.schema";
import { carModel } from "./modules/car-model/schemas/car-model.schema";
import { brand } from "./modules/brand/schemas/brand.schema";
import { baggageOption } from "./modules/baggage-option/schemas/baggage-option.schema";
import { transmission } from "./modules/transmission/schemas/transmission.schema";
import { TimeModule } from './modules/time/time.module';
import { PricingModule } from './modules/pricing/pricing.module';
import { time } from "./modules/time/schemas/time.schema";
import { pricing } from "./modules/pricing/schemas/pricing.schema";
import { CarImagesModule } from './modules/car-images/car-images.module';
import { carImage } from "./modules/car-images/schemas/car-image.schema";
import { LanguagesModule } from './modules/languages/languages.module';
import { BookingModule } from './modules/booking/booking.module';
import { booking } from "./modules/booking/schemas/booking.schema";
import { MailModule } from './modules/mail/mail.module';
import { languages } from "./modules/languages/schemas/languages.schema";
import { PackagesModule } from './modules/packages/packages.module';
import { packages } from "./modules/packages/schemas/packages.schema";
import { CountryModule } from './modules/country/country.module';
import { country } from "./modules/country/schemas/country.schema";



@Module({
  imports: [
    PricingModule,
    AuthModule,
    UsersModule,
    HubspotModule,
    CarModule,
    DriverModule,
    UserDocumentsModule,
    UserVerificationsDocumentsModule,
    BrandModule,
    CarModelModule,
    YearModule,
    ColorModule,
    TransmissionModule,
    CarTypeModule,
    BaggageOptionModule,
    SeatsCapacityModule,
    DriverOptionModule,
    TimeModule,
    CarImagesModule,
    LanguagesModule,
    BookingModule,
    MailModule,
    PackagesModule,
    CountryModule,


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
        entities: [country,packages,languages,booking,carImage,pricing,time,transmission,baggageOption,brand,carModel,carType,color,driverOption,seatsCapacity,year,User,UserDocuments,UserVerificationDocuments,car,driver],
        synchronize: true,
      }),
      inject: [ConfigService]
    }),


  ],
     controllers: [],
     providers: [GoogleStrategy],
})
export class AppModule {}

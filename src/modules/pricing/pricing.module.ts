import { Module } from '@nestjs/common';
import { pricingService } from "./pricing.service";
import { PricingController } from './pricing.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { time } from "../time/schemas/time.schema";
import { pricing } from "./schemas/pricing.schema";
import { timeRepository } from "../time/time.repository";
import { TimeService } from "../time/time.service";
import { pricingRepository } from "./pricing.repository";
import { CarService } from "../car/car.service";
import { carRepository } from "../car/car.repository";
import { car } from "../car/schemas/car.schema";
import { BrandService } from "../brand/brand.service";
import { brandRepository } from "../brand/brand.repository";
import { brand } from "../brand/schemas/brand.schema";
import { carModel } from "../car-model/schemas/car-model.schema";
import { CarModelService } from "../car-model/car-model.service";
import { CarModelRepository } from "../car-model/car-model.repository";
import { year } from "../year/schemas/year.schema";
import { YearService } from "../year/year.service";
import { yearRepository } from "../year/year.repository";
import { color } from "../color/schemas/color.schema";
import { ColorService } from "../color/color.service";
import { ColorRepository } from "../color/color.repository";
import { CarTypeService } from "../car-type/car-type.service";
import { CarTypeRepository } from "../car-type/car-type.repository";
import { carType } from "../car-type/schemas/car-type.schema";
import { transmission } from "../transmission/schemas/transmission.schema";
import { TransmissionService } from "../transmission/transmission.service";
import { transmissionRepository } from "../transmission/transmission.repository";
import { baggageOption } from "../baggage-option/schemas/baggage-option.schema";
import { BaggageOptionService } from "../baggage-option/baggage-option.service";
import { baggageOptionRepository } from "../baggage-option/baggage-option.repository";
import { SeatsCapacityService } from "../seats-capacity/seats-capacity.service";
import { seatsCapacityRepository } from "../seats-capacity/seats-capacity.repository";
import { seatsCapacity } from "../seats-capacity/schemas/seats-capacity.schema";
// import { DriverOptionService } from "../driver-option/driver-option.service";
// import { driverOptionRepository } from "../driver-option/driver-option.repository";
// import { driverOption } from "../driver-option/schemas/driver-option.schema";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "../users/users.service";
import { UsersRepository } from "../users/users.respository";
import { User } from "../users/schemas/user.schema";
import { CacheModule } from "@nestjs/common/cache";
import * as redisStore from "cache-manager-redis-store";
import { CarModule } from "../car/car.module";
import { TimeModule } from "../time/time.module";
import { DriverService } from "../driver/driver.service";
import { driverRepository } from "../driver/driver.repository";
import { driver } from "../driver/schemas/driver.schema";
import { UsersDocumentRepository } from "../user-documents/user-document.repository";
import { UserDocuments } from "../user-documents/schemas/userDocuments.schema";
import {
  userVerifcationDocumentsRepository
} from "../user-verifications-documents/user-verification-documents.repository";
import { UserVerificationDocuments } from "../user-verifications-documents/schemas/userVerificationDocumets.schema";
import { countryRepository } from "../country/country.repository";
import { country } from "../country/schemas/country.schema";
import { CountryService } from "../country/country.service";
import { UserDocumentsService } from "../user-documents/user-documents.service";
import {
  userVerificationsDocumentsService
} from "../user-verifications-documents/user-verifications-documents.service";


@Module({
  imports: [TypeOrmModule.forFeature([country,UserVerificationDocuments,UserDocuments,driver,User,seatsCapacity,baggageOption,transmission,carType,color,year,carModel,brand,time,pricing,car]),
    CacheModule.register({
      store: redisStore,
      uri: process.env.REDIS_URL,
    }),
    ],
  controllers: [PricingController],
  providers: [userVerificationsDocumentsService,UserDocumentsService,CountryService,countryRepository,userVerifcationDocumentsRepository,UsersDocumentRepository,driverRepository,DriverService,pricingRepository,pricingService,timeRepository,TimeService,UsersRepository,UsersService,JwtService,SeatsCapacityService,seatsCapacityRepository,BaggageOptionService,baggageOptionRepository,TransmissionService,transmissionRepository,CarTypeService,CarTypeRepository,ColorService,ColorRepository,YearService,yearRepository,CarModelService,CarModelRepository,brandRepository,BrandService,carRepository,CarService],
  exports: [pricingService,pricingRepository],

})
export class PricingModule {}

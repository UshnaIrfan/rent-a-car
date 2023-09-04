import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { bookingRepository } from "./booking.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { booking } from "./schemas/booking.schema";
import { JwtService } from "@nestjs/jwt";
import { CacheModule } from "@nestjs/common/cache";
import * as redisStore from "cache-manager-redis-store";
import { UsersService } from "../users/users.service";
import { User } from "../users/schemas/user.schema";
import { UsersRepository } from "../users/users.respository";
import { CarService } from "../car/car.service";
import { carRepository } from "../car/car.repository";
import { car } from "../car/schemas/car.schema";
import { BrandService } from "../brand/brand.service";
import { brandRepository } from "../brand/brand.repository";
import { brand } from "../brand/schemas/brand.schema";
import { CarModelService } from "../car-model/car-model.service";
import { CarModelRepository } from "../car-model/car-model.repository";
import { carModel } from "../car-model/schemas/car-model.schema";
import { YearService } from "../year/year.service";
import { yearRepository } from "../year/year.repository";
import { year } from "../year/schemas/year.schema";
import { ColorService } from "../color/color.service";
import { ColorRepository } from "../color/color.repository";
import { color } from "../color/schemas/color.schema";
import { CarTypeService } from "../car-type/car-type.service";
import { CarTypeRepository } from "../car-type/car-type.repository";
import { carType } from "../car-type/schemas/car-type.schema";
import { TransmissionService } from "../transmission/transmission.service";
import { transmissionRepository } from "../transmission/transmission.repository";
import { transmission } from "../transmission/schemas/transmission.schema";
import { BaggageOptionService } from "../baggage-option/baggage-option.service";
import { baggageOptionRepository } from "../baggage-option/baggage-option.repository";
import { baggageOption } from "../baggage-option/schemas/baggage-option.schema";
import { SeatsCapacityService } from "../seats-capacity/seats-capacity.service";
import { seatsCapacityRepository } from "../seats-capacity/seats-capacity.repository";
import { seatsCapacity } from "../seats-capacity/schemas/seats-capacity.schema";
import { DriverOptionService } from "../driver-option/driver-option.service";
import { driverOptionRepository } from "../driver-option/driver-option.repository";
import { driverOption } from "../driver-option/schemas/driver-option.schema";
import { driver } from "../driver/schemas/driver.schema";
import { driverRepository } from "../driver/driver.repository";
import { DriverService } from "../driver/driver.service";
import { UsersDocumentRepository } from "../user-documents/user-document.repository";
import { UserDocumentsService } from "../user-documents/user-documents.service";
import { UserDocuments } from "../user-documents/schemas/userDocuments.schema";
import { UserVerificationDocuments } from "../user-verifications-documents/schemas/userVerificationDocumets.schema";
import { userVerifcationDocumentsRepository } from "../user-verifications-documents/user-verification-documents.repository";
import { userVerificationsDocumentsService } from "../user-verifications-documents/user-verifications-documents.service";
import { LanguagesService } from "../languages/languages.service";
import { languagesRepository } from "../languages/languages.repository";
import { languages } from "../languages/schemas/languages.schema";

@Module({
  imports: [TypeOrmModule.forFeature([languages,UserVerificationDocuments,UserDocuments,driver,driverOption,seatsCapacity,baggageOption,transmission,carType,color,year,carModel,brand,booking,User,car]),
    CacheModule.register({
    store: redisStore,
    uri: process.env.REDIS_URL,
  })],

  controllers: [BookingController],
  providers: [languagesRepository,LanguagesService,userVerificationsDocumentsService,userVerifcationDocumentsRepository,UserDocumentsService,UsersDocumentRepository,DriverService,driverRepository,DriverOptionService,driverOptionRepository,SeatsCapacityService,seatsCapacityRepository,BaggageOptionService,baggageOptionRepository,TransmissionService,transmissionRepository,CarTypeService,CarTypeRepository,ColorService,ColorRepository,YearService,yearRepository,CarModelService,CarModelRepository,BrandService,brandRepository,carRepository,CarService,UsersRepository,UsersService,JwtService,BookingService,bookingRepository],
})
export class BookingModule {}

import { Module } from '@nestjs/common';
import { CarService } from './car.service';
import { CarController } from './car.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { car } from "./schemas/car.schema";
import { carRepository } from "./car.repository";
import { BrandService } from "../brand/brand.service";
import { brandRepository } from "../brand/brand.repository";
import { brand } from "../brand/schemas/brand.schema";
import { CarModelRepository } from "../car-model/car-model.repository";
import { CarModelService } from "../car-model/car-model.service";
import { carModel } from "../car-model/schemas/car-model.schema";
import { YearService } from "../year/year.service";
import { yearRepository } from "../year/year.repository";
import { year } from "../year/schemas/year.schema";
import { ColorRepository } from "../color/color.repository";
import { color } from "../color/schemas/color.schema";
import { ColorService } from "../color/color.service";
import { transmissionRepository } from "../transmission/transmission.repository";
import { TransmissionService } from "../transmission/transmission.service";
import { transmission } from "../transmission/schemas/transmission.schema";
import { CarTypeService } from "../car-type/car-type.service";
import { CarTypeRepository } from "../car-type/car-type.repository";
import { carType } from "../car-type/schemas/car-type.schema";
import { BaggageOptionService } from "../baggage-option/baggage-option.service";
import { baggageOptionRepository } from "../baggage-option/baggage-option.repository";
import { baggageOption } from "../baggage-option/schemas/baggage-option.schema";
import { seatsCapacityRepository } from "../seats-capacity/seats-capacity.repository";
import { SeatsCapacityService } from "../seats-capacity/seats-capacity.service";
import { seatsCapacity } from "../seats-capacity/schemas/seats-capacity.schema";
import { driverOptionRepository } from "../driver-option/driver-option.repository";
import { driverOption } from "../driver-option/schemas/driver-option.schema";
import { DriverOptionService } from "../driver-option/driver-option.service";
import { CacheModule } from "@nestjs/common/cache";
import * as redisStore from "cache-manager-redis-store";
import {  JwtService } from "@nestjs/jwt";
import { UsersService } from "../users/users.service";
import { User } from "../users/schemas/user.schema";
import { UsersRepository } from "../users/users.respository";
import { pricing } from "../pricing/schemas/pricing.schema";
import { pricingRepository } from "../pricing/pricing.repository";
import { timeRepository } from "../time/time.repository";
import { time } from "../time/schemas/time.schema";
import {pricingService} from "../pricing/pricing.service";
import {TimeService} from "../time/time.service";
import { PricingModule } from "../pricing/pricing.module";
import { TimeModule } from "../time/time.module";

@Module({
  imports: [TypeOrmModule.forFeature([time,pricing,User,driverOption,seatsCapacity,baggageOption,carType,transmission,car,brand,carModel,year,color]),
    CacheModule.register({
      store: redisStore,
      uri: process.env.REDIS_URL,
    }),   ],
  controllers: [CarController],
  providers: [TimeService,timeRepository,pricingRepository,pricingService,UsersRepository,UsersService,JwtService,DriverOptionService,driverOptionRepository,SeatsCapacityService,seatsCapacityRepository,baggageOptionRepository,BaggageOptionService,CarTypeRepository,CarTypeService,TransmissionService,transmissionRepository,ColorService,ColorRepository,yearRepository,YearService,CarModelService,CarService,BrandService,carRepository,brandRepository,CarModelRepository],
  exports: [CarService],

})
export class CarModule {}

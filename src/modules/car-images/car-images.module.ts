import { Module } from '@nestjs/common';
import { CarImagesService } from './car-images.service';
import { CarImagesController } from './car-images.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { carImageRepository } from "./car-image.repository";
import { carImage } from "./schemas/car-image.schema";
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
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "../users/users.service";
import { UsersRepository } from "../users/users.respository";
import { User } from "../users/schemas/user.schema";
import { CacheModule } from "@nestjs/common/cache";
import * as redisStore from "cache-manager-redis-store";

@Module({
  imports: [TypeOrmModule.forFeature([User,driverOption,seatsCapacity,baggageOption,transmission,carType,color,year,carModel,car,carImage,brand]),
    CacheModule.register({
      store: redisStore,
      uri: process.env.REDIS_URL,
    }),],
  controllers: [CarImagesController],
  providers: [UsersRepository,UsersService ,JwtService,DriverOptionService,driverOptionRepository,SeatsCapacityService,seatsCapacityRepository,baggageOptionRepository,BaggageOptionService ,TransmissionService,transmissionRepository,CarTypeService,CarTypeRepository,ColorService,ColorRepository,yearRepository,YearService,CarModelRepository,CarModelService,brandRepository,BrandService,carRepository,CarService,CarImagesService,carImageRepository],
})
export class CarImagesModule {}

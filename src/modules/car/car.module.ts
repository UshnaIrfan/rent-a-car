import { Module } from '@nestjs/common';
import { CarService } from './car.service';
import { CarController } from './car.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { car } from "./schemas/car.schema";
import { carRepository } from "./car-repository";
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

@Module({
  imports: [TypeOrmModule.forFeature([driverOption,seatsCapacity,baggageOption,carType,transmission,car,brand,carModel,year,color])],
  controllers: [CarController],
  providers: [DriverOptionService,driverOptionRepository,SeatsCapacityService,seatsCapacityRepository,baggageOptionRepository,BaggageOptionService,CarTypeRepository,CarTypeService,TransmissionService,transmissionRepository,ColorService,ColorRepository,yearRepository,YearService,CarModelService,CarService,BrandService,carRepository,brandRepository,CarModelRepository]



})
export class CarModule {}

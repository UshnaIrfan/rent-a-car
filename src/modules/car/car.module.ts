import { Module } from '@nestjs/common';
import { CarService } from './car.service';
import { CarController } from './car.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { car } from "./schemas/car.schema";
import { carRepository } from "./car-repository";

@Module({
  imports: [TypeOrmModule.forFeature([car])],
  controllers: [CarController],
  providers: [CarService,carRepository]



})
export class CarModule {}

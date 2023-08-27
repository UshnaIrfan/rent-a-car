import { Module } from '@nestjs/common';
import { CarTypeService } from './car-type.service';
import { CarTypeController } from './car-type.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { carType } from "./schemas/car-type.schema";
import { CarTypeRepository } from "./car-type.repository";

@Module({
  imports: [TypeOrmModule.forFeature([carType])],
  controllers: [CarTypeController],
  providers: [CarTypeService,CarTypeRepository],
})
export class CarTypeModule {}

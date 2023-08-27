import { Module } from '@nestjs/common';
import { CarModelService } from './car-model.service';
import { CarModelController } from './car-model.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { carModel } from "./schemas/car-model.schema";
import { CarModelRepository } from "./car-model.repository";

@Module({
  imports: [TypeOrmModule.forFeature([carModel])],
  controllers: [CarModelController],
  providers: [CarModelService,CarModelRepository],
})
export class CarModelModule {}

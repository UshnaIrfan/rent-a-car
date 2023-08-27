import { Module } from '@nestjs/common';
import { DriverOptionService } from './driver-option.service';
import { DriverOptionController } from './driver-option.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { driverOption } from "./schemas/driver-option.schema";
import { driverOptionRepository } from "./driver-option.repository";

@Module({
  imports: [TypeOrmModule.forFeature([driverOption])],
  controllers: [DriverOptionController],
  providers: [DriverOptionService,driverOptionRepository],
})
export class DriverOptionModule {}

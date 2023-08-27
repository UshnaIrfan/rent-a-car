import { Module } from '@nestjs/common';
import { SeatsCapacityService } from './seats-capacity.service';
import { SeatsCapacityController } from './seats-capacity.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { seatsCapacity } from "./schemas/seats-capacity.schema";
import { seatsCapacityRepository } from "./seats-capacity.repository";

@Module({
  imports: [TypeOrmModule.forFeature([seatsCapacity])],
  controllers: [SeatsCapacityController],
  providers: [SeatsCapacityService,seatsCapacityRepository],
})
export class SeatsCapacityModule {}

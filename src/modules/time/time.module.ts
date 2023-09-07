import { Module } from '@nestjs/common';
import { TimeService } from './time.service';
import { TimeController } from './time.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { time } from "./schemas/time.schema";
import { timeRepository } from "./time.repository";

@Module({
  imports: [TypeOrmModule.forFeature([
    time])],
  controllers: [TimeController],
  providers: [TimeService,timeRepository],
})
export class TimeModule {}

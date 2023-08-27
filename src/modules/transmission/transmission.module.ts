import { Module } from '@nestjs/common';
import { TransmissionService } from './transmission.service';
import { TransmissionController } from './transmission.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { transmission } from "./schemas/transmission.schema";
import { transmissionRepository } from "./transmission.repository";

@Module({
  imports: [TypeOrmModule.forFeature([transmission])],

  controllers: [TransmissionController],
  providers: [TransmissionService,transmissionRepository],
})
export class TransmissionModule {}

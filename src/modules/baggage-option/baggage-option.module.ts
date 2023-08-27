import { Module } from '@nestjs/common';
import { BaggageOptionService } from './baggage-option.service';
import { BaggageOptionController } from './baggage-option.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { baggageOption } from "./schemas/baggage-option.schema";
import { baggageOptionRepository } from "./baggage-option.repository";

@Module({
  imports: [TypeOrmModule.forFeature([baggageOption])],
  controllers: [BaggageOptionController],
  providers: [BaggageOptionService,baggageOptionRepository],
})
export class BaggageOptionModule {}

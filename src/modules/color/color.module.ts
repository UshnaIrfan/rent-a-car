import { Module } from '@nestjs/common';
import { ColorService } from './color.service';
import { ColorController } from './color.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { color } from "./schemas/color.schema";
import { ColorRepository } from "./color.repository";

@Module({
  imports: [TypeOrmModule.forFeature([color])],
  controllers: [ColorController],
  providers: [ColorService,ColorRepository],
})
export class ColorModule {}

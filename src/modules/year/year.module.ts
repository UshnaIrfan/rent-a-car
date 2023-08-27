import { Module } from '@nestjs/common';
import { YearService } from './year.service';
import { YearController } from './year.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { year } from "./schemas/year.schema";
import { yearRepository } from "./year.repository";

@Module({
  imports: [TypeOrmModule.forFeature([year])],
  controllers: [YearController],
  providers: [YearService,yearRepository],
})
export class YearModule {}

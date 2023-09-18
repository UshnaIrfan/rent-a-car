import { Module } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryController } from './country.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { country } from "./schemas/country.schema";
import { countryRepository } from "./country.repository";

@Module({
  imports: [TypeOrmModule.forFeature([country])],

  controllers: [CountryController],
  providers: [CountryService,countryRepository],
})
export class CountryModule {}

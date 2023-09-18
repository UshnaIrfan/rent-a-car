import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CountryService } from './country.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { color } from "../color/schemas/color.schema";
import { country } from "./schemas/country.schema";

@ApiTags('country')
@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}


      // create
      @ApiBody({type:CreateCountryDto})
      @Post('create')
      async createCountry(@Body() createCountryDto: CreateCountryDto)
      {
        return this.countryService.createCountry(createCountryDto);
      }



        // get all  country
        @Get('all')
        async  getAllCountry(): Promise<country[]>
        {
          return this.countryService.getAllCountry();
        }



}

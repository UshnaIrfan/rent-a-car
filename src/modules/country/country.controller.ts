import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CountryService } from './country.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { country } from "./schemas/country.schema";
import { UpdateCountryDto } from "./dto/update-country.dto";

@ApiTags('country')
@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}


      // create
      @ApiBody({type:CreateCountryDto})
      @Post('create')
      async createCountry(@Body() createCountryDto: CreateCountryDto):Promise<country>
      {
        return this.countryService.createCountry(createCountryDto);
      }



        // get all  country
        @Get('all')
        async  getAllCountry(): Promise<country[]>
        {
          return this.countryService.getAllCountry();
        }




        // update country
        @Patch('/:countryId')
        async  updateCountry(@Param('countryId') countryId:string, @Body() body:UpdateCountryDto )
        {
          return this.countryService.updateCountry(countryId,body);
        }



        // delete  country
        @Delete('/:countryId')
        async  deleteCountry(@Param('countryId') countryId:string )
        {
          return this.countryService.deleteCountry(countryId,);
        }



}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PricingService } from './pricing.service';
import { CreatePricingDto } from './dto/create-pricing.dto';
import { UpdatePricingDto } from './dto/update-pricing.dto';
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { pricing } from "./schemas/pricing.schema";
import { carType } from "../car-type/schemas/car-type.schema";
import { UpdateCarTypeDto } from "../car-type/dto/update-car-type.dto";


@ApiTags('pricing')
@Controller('pricing')
export class PricingController {
  constructor(private readonly pricingService: PricingService) {}


      // create
      @ApiBody({type:CreatePricingDto})
      @Post('create')
      async createPricing(@Body() createPricingDto: CreatePricingDto):Promise<pricing>
      {
        return this.pricingService.createPricing(createPricingDto);
      }



      // get all  pricing
      @Get('all')
      async  getPricing(): Promise<pricing[]>
      {
        return this.pricingService.getPricing();
      }



      // update  pricing
      @Patch('/:pricingId')
      async  updatePricing(@Param('pricingId') pricingId:string, @Body() body:UpdatePricingDto )
      {
        return this.pricingService.updatePricing(pricingId,body);
      }



       // delete  pricing
      @Delete('/:pricingId')
      async  deletePricing(@Param('pricingId') pricingId:string )
      {
        return this.pricingService.deletePricing(pricingId);
      }



}

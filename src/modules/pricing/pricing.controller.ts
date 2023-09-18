import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from "@nestjs/common";
import { pricingService } from './pricing.service';
import { CreatePricingDto } from './dto/create-pricing.dto';
import { UpdatePricingDto } from './dto/update-pricing.dto';
import { ApiBearerAuth, ApiBody, ApiTags } from "@nestjs/swagger";
import { pricing } from "./schemas/pricing.schema";
import { Roles } from "../../decorators/role.decorators";
import { Role } from "../../enums/role.enum";
import { UserAuthGuard } from "../../guards/user-auth-guard";


@ApiTags('pricing')
@Controller('pricing')
export class PricingController {
  constructor(private readonly pricingService: pricingService) {}


      // create
      @ApiBearerAuth()
      @Roles(Role.RENTER)
      @UseGuards(UserAuthGuard)
      @ApiBody({type:CreatePricingDto})
      @Post('create')
      async createPricing(@Body() createPricingDto: CreatePricingDto,@Req() request: any):Promise<pricing>
      {
        return this.pricingService.createPricing(createPricingDto,request.user.id);
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

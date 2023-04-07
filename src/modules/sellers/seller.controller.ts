import { Controller, Post, Body, Get, Param, Put, Delete } from "@nestjs/common";
import { SellerService } from './seller.service';
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { seller } from "./schemas/seller.schema";
import {addSellerDto} from "./dto/add-seller.dto";


@ApiTags('Sellers')
@Controller('sellers')
export class SellerController {
  constructor(private readonly sellerService: SellerService) {}


      //create seller (hidden)
      //  @ApiBody({type:CreateSellerDto})
      //  @Post('create')
      //  async  create(@Body() createSellerDto: CreateSellerDto):Promise<{record:seller}>
      //  {
      //    return this.sellerService.createseller(createSellerDto);
      //  }



      // get seller by ID (associated categories)
       @Get('/id/:seller_id')
       async  getSellerByID( @Param('seller_id') id: string) :Promise<{record:seller}>
       {
         return this.sellerService.getSellerById(id);
       }



      // get all sellers
       @Get('all_sellers')
       async  getAllSellers( ):Promise<{records:seller[]}>
       {
         return this.sellerService.getAllSellers();
       }





}

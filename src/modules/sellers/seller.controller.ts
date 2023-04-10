import { Controller, Post, Body, Get, Param, Put, Delete, Query, Patch } from "@nestjs/common";
import { SellerService } from './seller.service';
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { seller } from "./schemas/seller.schema";
import {addSellerDto} from "./dto/add-seller.dto";
import {updateSellerDto} from "./dto/update-seller.dto";
import updateSellerInterface from "./interfaces/update-seller.interface";
import { CreateSellerDto } from "./dto/create-seller.dto";


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



       // add seller
       @ApiBody({type:addSellerDto})
       @Post('add')
       async  add(@Body() body:addSellerDto)
       {
         return this.sellerService.addSeller(body);
       }




        // update seller
       @Patch('update')
       async updateSeller(@Body() updateSellerDto:updateSellerDto):Promise<{ message: string, update:updateSellerInterface}>
       {
           return this.sellerService.updateSeller(updateSellerDto);
       }




       // delete seller
      @Delete('delete')
      async deleteSeller(@Query('id') id:string):Promise<{message: string, deletedSeller: seller}>
      {
         return this.sellerService.deleteSeller(id);
      }






  }

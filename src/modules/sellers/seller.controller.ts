import { Controller, Post, Body, Get, Param, Put, Delete } from "@nestjs/common";
import { SellerService } from './seller.service';
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { seller } from "./schemas/seller.schema";
import { CreateSellerDto } from './dto/create-seller.dto';
import {deleteSellerDto} from "./dto/delete-seller.dto";
import {updateSellerDto} from "./dto/update-seller.dto";


@ApiTags('Sellers')
@Controller('sellers')
export class SellerController {
  constructor(private readonly sellerService: SellerService) {}


      // create seller
      @ApiBody({type:CreateSellerDto})
      @Post('create')
      async  create(@Body() createSellerDto: CreateSellerDto):Promise<seller>
      {
        return this.sellerService.createseller(createSellerDto);
      }



     // get seller by ID
      @Get('/id/:seller_ID')
      async  getSellerByID( @Param('seller_ID') seller_ID: string)
      {
        return this.sellerService.getSellerById(seller_ID);
      }



     // update category
      @ApiBody({type:updateSellerDto})
      @Put('update')
      async updateCategory(@Body() updateCategory: updateSellerDto)
      {
        return this.sellerService.updateSeller(updateCategory);
      }



     // delete category
      @ApiBody({type:deleteSellerDto})
      @Delete('delete')
      async deleteCategory(@Body() deleteCategory:deleteSellerDto)
      {
         return this.sellerService.deleteSeller(deleteCategory);
      }



}

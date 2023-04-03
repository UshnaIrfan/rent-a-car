import { Controller, Post, Body, Get, Param, Put, Delete } from "@nestjs/common";
import { SellerService } from './seller.service';
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { seller } from "./schemas/seller.schema";
import { CreateSellerDto } from './dto/create-seller.dto';
import {deleteSellerDto} from "./dto/delete-seller.dto";
import {updateSellerDto} from "./dto/update-seller.dto";
import { category } from "../categories/schemas/category.schema";


@ApiTags('Sellers')
@Controller('sellers')
export class SellerController {
  constructor(private readonly sellerService: SellerService) {}


      // create seller
       @ApiBody({type:CreateSellerDto})
       @Post('create')
       async  create(@Body() createSellerDto: CreateSellerDto):Promise<{record:seller}>
       {
         return this.sellerService.createseller(createSellerDto);
       }



      // get seller by ID
       @Get('/id/:seller_id')
       async  getSellerByID( @Param('seller_id') id: string) :Promise<{record:seller}>
       {
         return this.sellerService.getSellerById(id);
       }



     // get all sellers
       @Get('all_sellers')
       async  getAllSellers( ):Promise<{records:seller[]}  >
       {
         return this.sellerService.getAllSellers();
       }



     // // get seller by ID
     //  @Get('/id/:seller_ID')
     //  async  getSellerByID( @Param('seller_ID') sellerId: string)
     //  {
     //    return this.sellerService.getSellerById(sellerId);
     //  }
     //
     //
     //
     // // update seller
     //  @ApiBody({type:updateSellerDto})
     //  @Put('update')
     //  async updateCategory(@Body() updateCategory: updateSellerDto)
     //  {
     //    return this.sellerService.updateSeller(updateCategory);
     //  }
     //
     //
     //
     // // delete seller
     //  @ApiBody({type:deleteSellerDto})
     //  @Delete('delete')
     //  async deleteCategory(@Body() deleteCategory:deleteSellerDto)
     //  {
     //     return this.sellerService.deleteSeller(deleteCategory);
     //  }


}

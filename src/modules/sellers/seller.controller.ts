import { Controller, Post, Body, Get, Param, Put, Delete, Query, Patch, Req } from "@nestjs/common";
import { SellerService } from './seller.service';
import { ApiBearerAuth, ApiBody, ApiTags } from "@nestjs/swagger";
import { seller } from "./schemas/seller.schema";
import {addSellerDto} from "./dto/add-seller.dto";
import {review} from "../review/schemas/submit-review.schema";


@ApiTags('Sellers')
@Controller('sellers')
export class SellerController {
  constructor(private readonly sellerService: SellerService) {}


        // get all sellers
        @Get('all-sellers')
        async  getAllSellers( ):Promise<{records:seller[]}>
        {
            return this.sellerService.getAllSellers();
        }



       // get seller by ID (associated categories)
       @Get('/id/:seller_id')
       async  getSellerByID( @Param('seller_id') id: string) :Promise<{record:seller}>
       {
          return this.sellerService.getSellerById(id);
       }




       // add seller
       @ApiBearerAuth()
       @ApiBody({type:addSellerDto})
       @Post('add')
       async  add(@Body() body:addSellerDto,@Req() req):Promise<{seller: seller, review: review}>
       {
          const accessToken = req.headers.authorization.split(' ')[1];
          return this.sellerService.addSeller(body,accessToken);
       }






  }

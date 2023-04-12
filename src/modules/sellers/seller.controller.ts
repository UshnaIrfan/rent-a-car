import { Controller, Post, Body, Get, Param, Put, Delete, Query, Patch, Req } from "@nestjs/common";
import { SellerService } from './seller.service';
import { ApiBearerAuth, ApiBody, ApiTags } from "@nestjs/swagger";
import { seller } from "./schemas/seller.schema";
import {addSellerDto} from "./dto/add-seller.dto";
import {updateSellerDto} from "./dto/update-seller.dto";
import updateSellerInterface from "./interfaces/update-seller.interface";
import { CreateSellerDto } from "./dto/create-seller.dto";
import {review} from "../review/schemas/submit-review.schema";

@ApiTags('Sellers')
@Controller('sellers')
export class SellerController {
  constructor(private readonly sellerService: SellerService) {}


      //create seller
       @ApiBearerAuth()
       @ApiBody({type:CreateSellerDto})
       @Post('create')
       async  create(@Body() createSellerDto: CreateSellerDto,@Req() req):Promise<{record:seller}>
       {
          const accessToken = req.headers.authorization.split(' ')[1];
          return this.sellerService.createseller(createSellerDto,accessToken);
       }



       // get seller by ID (associated categories)
       @Get('/id/:seller_id')
       async  getSellerByID( @Param('seller_id') id: string) :Promise<{record:seller}>
       {
          return this.sellerService.getSellerById(id);
       }



       // get all sellers
       @Get('all-sellers')
       async  getAllSellers( ):Promise<{records:seller[]}>
       {
          return this.sellerService.getAllSellers();
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




        // update seller
       @ApiBearerAuth()
       @Patch('update')
       async updateSeller(@Body() updateSellerDto:updateSellerDto,@Req() req):Promise<{ message: string, update:updateSellerInterface}>
       {
            const accessToken = req.headers.authorization.split(' ')[1];
            return this.sellerService.updateSeller(updateSellerDto , accessToken);
       }




       // delete seller
       @ApiBearerAuth()
       @Delete('delete')
       async deleteSeller(@Query('id') id:string,@Req() req):Promise<{message: string, deletedSeller: seller}>
       {
           const accessToken = req.headers.authorization.split(' ')[1];
           return this.sellerService.deleteSeller(id,accessToken);
       }






  }

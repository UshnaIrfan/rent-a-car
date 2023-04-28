import { Controller, Post, Body, Get, Param, Put, Delete, Query, Patch, Req } from "@nestjs/common";
import { SellerService } from './seller.service';
import { ApiBearerAuth, ApiBody, ApiTags } from "@nestjs/swagger";
import { seller } from "./schemas/seller.schema";
import {addSellerDto} from "./dto/add-seller.dto";
import {updateSellerDto} from "./dto/update-seller.dto";
import updateSellerInterface from "./interfaces/update-seller.interface";
import { CreateSellerDto } from "./dto/create-seller.dto";
import {review} from "../review/schemas/submit-review.schema";
import {likeDislikeReviewDto} from "../review/dto/like-dislike-review.dto";
import paginationSellerInterface from "./interfaces/pagination-seller.interface";
import {adminUpdateSellerDto} from "./dto/admin-update.seller.dto";
import adminUpdateSellerInterface from "./interfaces/admin-update.seller.interface";


@ApiTags('Sellers')
@Controller('sellers')
export class SellerController {
  constructor(private readonly sellerService: SellerService) {}


       //create seller
       @ApiBody({type:CreateSellerDto})
       @Post('create')
       async  create(@Body() createSellerDto: CreateSellerDto):Promise<{record:seller}>
       {
          return this.sellerService.createseller(createSellerDto);
       }



       // get seller by ID (associated categories)
       @Get('/id/:seller_id')
       async  getSellerByID( @Param('seller_id') id: string) :Promise<{record:seller}>
       {
          return this.sellerService.getSellerById(id);
       }



       // get all sellers
       // @Get('all-sellers')
       // async  getAllSellers( ):Promise<{records:seller[]}>
       // {
       //    return this.sellerService.getAllSellers();
       // }
        @Get('all-sellers')
        async getReview(@Query('page') page: number = 1):Promise<paginationSellerInterface>
        {
           return this.sellerService.getAllSellers(page);
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
       @Patch('update')
       async updateSeller(@Body() updateSellerDto:updateSellerDto)
       {
            return this.sellerService.updateSeller(updateSellerDto);
       }




       // delete seller
       @Delete('delete')
       async deleteSeller(@Query('id') id:string):Promise<{message: string, deletedSeller: seller}>
       {
           return this.sellerService.deleteSeller(id);
       }




       //admin update seller status
       @Patch('admin/update')
       async adminUpdateSeller(@Body() adminUpdateSellerDto:adminUpdateSellerDto):Promise<{ update: updateSellerInterface; message: string }>
       {
          return this.sellerService.adminUpdateSeller(adminUpdateSellerDto);
       }


  }

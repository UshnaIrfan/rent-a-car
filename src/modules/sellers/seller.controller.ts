import { Controller, Post, Body, Get, Param, Put, Delete, Query, Patch, Req, UseGuards } from "@nestjs/common";
import { SellerService } from './seller.service';
import { ApiBearerAuth, ApiBody, ApiQuery, ApiTags } from "@nestjs/swagger";
import { seller } from "./schemas/seller.schema";
import {addSellerDto} from "./dto/add-seller.dto";
import {review} from "../review/schemas/submit-review.schema";
import { JwtAuthGuard } from "../auth/guards/jwt-auth-guard";
import { BlockRoles } from "../../decorators/block.decorators";
import { BlockRole } from "../../enums/block.enum";


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
       @BlockRoles(BlockRole.UNBLOCK)
       async  add(@Body() body:addSellerDto,@Req() req):Promise<{seller: seller, review: review}>
       {
          const accessToken = req.headers.authorization.split(' ')[1];
          return this.sellerService.addSeller(body,accessToken);
       }




        // unique seller show
        @Get('other/seller_id')
        async getUniqueSeller(@Query('excludeSeller') excludeSellerId: string)
        {
             return this.sellerService.getUniqueSeller(excludeSellerId);
        }


}

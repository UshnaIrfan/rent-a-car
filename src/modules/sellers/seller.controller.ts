import { Controller, Post, Body, Get, Param,  Query,  Req,} from "@nestjs/common";
import { SellerService } from './seller.service';
import { ApiBearerAuth, ApiBody, ApiTags } from "@nestjs/swagger";
import { seller } from "./schemas/seller.schema";
import {addSellerDto} from "./dto/add-seller.dto";
import {review} from "../review/schemas/submit-review.schema";
import { BlockRoles } from "../../decorators/block.decorators";
import { BlockRole } from "../../enums/block.enum";
import AuthBearer from "../../decorators/auth-bearer.decorators";



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
        async  add(@Body() body:addSellerDto,@AuthBearer() accessToken: string):Promise<{seller: seller, review: review}>
        {
            return this.sellerService.addSeller(body,accessToken);
        }


        // unique seller show
        @Get('other/seller_id')
        async getUniqueSeller(@Query('excludeSeller') excludeSellerId: string)
        {
             return this.sellerService.getUniqueSeller(excludeSellerId);
        }


}

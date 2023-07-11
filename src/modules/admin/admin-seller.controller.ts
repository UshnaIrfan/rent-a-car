import { Controller, Post, Body, Get, Query, Patch, Delete } from "@nestjs/common";
import { ApiBearerAuth, ApiBody, ApiOperation, ApiQuery, ApiTags } from "@nestjs/swagger";
import { Roles } from "../../decorators/role.decorators";
import { Role } from "../../enums/role.enum";
import {SellerService} from "../sellers/seller.service";
import { CreateSellerDto } from "../sellers/dto/create-seller.dto";
import { seller } from "../sellers/schemas/seller.schema";
import updateSellerInterface from "../sellers/interfaces/update-seller.interface";
import {updateSellerDto} from "../sellers/dto/update-seller.dto";
import {adminUpdateSellerDto} from "../sellers/dto/admin-update.seller.dto";

@ApiTags('admin')
@Controller('admin')
export class AdminSellerController {
  constructor(private readonly sellerService:SellerService) {}


        // create  admin seller
        @ApiBearerAuth()
        @ApiBody({type:CreateSellerDto})
        @Post('sellers/create')
        @Roles(Role.L2A_ADMIN)
        async  create(@Body() createSellerDto: CreateSellerDto):Promise<{record:seller}>
        {
            return this.sellerService.createseller(createSellerDto);
        }


        // update seller
        @ApiBearerAuth()
        @ApiBody({type:updateSellerDto})
        @Patch('sellers/update')
        @Roles(Role.L2A_ADMIN)
        async updateSeller(@Body() updateSellerDto:updateSellerDto)
        {
             return this.sellerService.updateSeller(updateSellerDto);
        }


        // delete seller with review
        @ApiBearerAuth()
        @Delete('sellers/delete')
        @Roles(Role.L2A_ADMIN)
        async deleteSeller(@Query('id') id:string):Promise<{message: string, deletedSeller: seller}>
        {
            return this.sellerService.deleteSeller(id);
        }



        //admin update seller status
        @ApiOperation({ summary: "Update seller status" })
        @ApiBearerAuth()
        @ApiBody({type:adminUpdateSellerDto})
        @Patch('sellers/update/status')
        @Roles(Role.L2A_ADMIN)
        async adminUpdateSeller(@Body() adminUpdateSellerDto:adminUpdateSellerDto):Promise<{ update: updateSellerInterface; message: string }>
        {
            return this.sellerService.adminUpdateSeller(adminUpdateSellerDto);
        }


        // search seller by name
        @ApiBearerAuth()
        @ApiQuery({ name: 'page', type: Number, required: true })
        @ApiQuery({ name: 'pageSize', type: Number, required:false})
        @ApiQuery({ name: 'query', required: false })
        @ApiQuery({ name: 'categoryId', required: false })
        @ApiQuery({ name: 'type', required: false })
        @ApiQuery({ name: 'country', required: false })
        @ApiQuery({ name: 'state', required: false })
        @ApiQuery({ name: 'address', required: false })
        @Get('Seller_search')
        @Roles(Role.L2A_ADMIN)
        async search(@Query('page') page: number = 1,@Query('pageSize') pageSize: number =10,@Query('query') query?: string, @Query('categoryId') categoryId?: string, @Query('type') type?: string, @Query('country') country?: string, @Query('state') state?: string, @Query('address') address?: string)
        {
            return this.sellerService.search(page ,pageSize,query, categoryId,type,country,state,address);
        }



         // get all sellers
        @ApiBearerAuth()
        @Get('/sellers/:all_sellers')
        @Roles(Role.L2A_ADMIN)
        async  getAllSeller():Promise<{records:seller[]}>
        {
              console.log("adminallseller")
             return this.sellerService.getAllSeller();
        }

}

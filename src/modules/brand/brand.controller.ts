import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BrandService } from './brand.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { brand } from "./schemas/brand.schema";


@ApiTags('brand')
@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}



        // create
        @ApiBody({type:CreateBrandDto})
        @Post('create')
        async createBrand(@Body() createBrandDto: CreateBrandDto):Promise<brand>
        {
          return this.brandService.createBrand(createBrandDto);
        }


        // get all   brands of cars
        @Get('all')
        async  getCarBrands(): Promise<brand[]>
        {
             return this.brandService.getCarBrands();
        }



       // update brands of car
        @Patch('/:brandId')
        async  updateCarBrands(@Param('brandId') brandId:string, @Body() body:UpdateBrandDto )
        {
          return this.brandService.updateCarBrands(brandId,body);
        }



        // delete  brand of car
        @Delete('/:brandId')
        async  deleteCarBrands(@Param('brandId') brandId:string )
        {
          return this.brandService.deleteCarBrands(brandId,);
        }

}

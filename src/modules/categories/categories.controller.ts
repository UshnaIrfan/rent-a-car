import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query, Req } from "@nestjs/common";
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { ApiBearerAuth, ApiBody, ApiTags } from "@nestjs/swagger";
import { category } from "./schemas/category.schema";
import {updateCategoryDto} from "./dto/update-category.dto";
import updateCategoryInterface from "./interfaces/update-category.interface";
import { seller } from "../sellers/schemas/seller.schema";
@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(
    private readonly categoriesService: CategoriesService
  ) {}


       // create category
       @ApiBearerAuth()
       @ApiBody({type:CreateCategoryDto})
       @Post('create')
       async  create(@Body() createCategoryDto: CreateCategoryDto,@Req() req):Promise<category>
       {
          const accessToken = req.headers.authorization.split(' ')[1];
          return this.categoriesService.createCategory(createCategoryDto,accessToken);
       }



        // get category by ID
       @Get('/id/:category_id')
       async  getCategoryByID(@Param('category_id') id: string):Promise<{ records: category }>
       {
           return this.categoriesService.getCategoryById(id);
       }




        // get all categories
        @Get('all-categories')
        async getAllCategories():Promise<{ records: category[] }>
        {
           return this.categoriesService.getAllCategories();
        }



       // update category
       @ApiBearerAuth()
       @Patch('update')
       async updateCategory(@Body() updateCategoryDto: updateCategoryDto,@Req() req):Promise<{ message: string, updateCategory: updateCategoryInterface }>
       {
         const accessToken = req.headers.authorization.split(' ')[1];
         return this.categoriesService.updateCategory(updateCategoryDto,accessToken);
       }



       // delete category
       @ApiBearerAuth()
       @Delete('delete')
       async deleteCategory(@Query('id') id:string,@Req() req):Promise<{ message: string, deletedCategory: category }>
       {
           const accessToken = req.headers.authorization.split(' ')[1];
           return this.categoriesService.deleteCategory(id ,accessToken );
       }




       //  common sellers
       @Get('/other/:id')
       async get(@Param('id') id: string):Promise<{ records: seller[] | null }>
       {
          return this.categoriesService.get(id);
       }


}

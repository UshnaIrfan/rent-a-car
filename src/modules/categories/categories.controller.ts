import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from "@nestjs/common";
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { category } from "./schemas/category.schema";


@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(
    private readonly categoriesService: CategoriesService
  ) {}


       // create category  ( hidden)
       // @ApiBody({type:CreateCategoryDto})
       // @Post('create')
       // async  create(@Body() createCategoryDto: CreateCategoryDto):Promise<category>
       // {
       //    return this.categoriesService.createCategory(createCategoryDto);
       // }



        // get category by ID
       @Get('/id/:category_id')
       async  getCategoryByID( @Param('category_id') id: string):Promise<{ records: category }>
       {
           return this.categoriesService.getCategoryById(id);
       }




        // get all categories
        @Get('all_categories')
        async getAllCategories():Promise<{ records: category[] }>
        {
           return this.categoriesService.getAllCategories();
        }





}

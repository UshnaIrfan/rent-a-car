import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from "@nestjs/common";
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { category } from "./schemas/category.schema";
import {updateCategoryDto} from "./dto/update-category.dto";
import {deleteCategoryDto} from "./dto/delete-category.dto";

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(
    private readonly categoriesService: CategoriesService
  ) {}



     // create category
      @ApiBody({type:CreateCategoryDto})
      @Post('create')
      async  create(@Body() createCategoryDto: CreateCategoryDto):Promise<category>
      {
        return this.categoriesService.createCategory(createCategoryDto);
      }



     // get category by name
      @Get('/name/:category_name')
      async  getCategoryByName( @Param('categoryName') categoryName: string)
      {
       return this.categoriesService.getCategoryByName(categoryName);
      }



      // get category by ID
       @Get('/id/:category_ID')
       async  getCategoryByID( @Param('categoryId') categoryId: string)
       {
         return this.categoriesService.getCategoryById(categoryId);
       }



      // update category
       @ApiBody({type:updateCategoryDto})
       @Put('update')
       async updateCategory(@Body() updateCategory: updateCategoryDto)
       {
        return this.categoriesService.updateCategory(updateCategory);
       }



      // delete category
      @ApiBody({type:deleteCategoryDto})
      @Delete('delete')
      async deleteCategory(@Body() deleteCategory: deleteCategoryDto)
      {
        return this.categoriesService.deleteCategory(deleteCategory);
      }




}

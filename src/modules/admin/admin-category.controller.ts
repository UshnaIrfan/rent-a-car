import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from "@nestjs/common";
import { ApiBearerAuth, ApiBody, ApiQuery, ApiTags } from "@nestjs/swagger";
import { CreateCategoryDto } from "../categories/dto/create-category.dto";
import { Roles } from "../../decorators/role.decorators";
import { Role } from "../../enums/role.enum";
import { category } from "../categories/schemas/category.schema";
import {CategoriesService} from "../categories/categories.service";
import {updateCategoryDto} from "../categories/dto/update-category.dto";
import paginationCategoryInterface from "../categories/interfaces/pagination-category.interface";
import updateCategoryInterface from "../categories/interfaces/update-category.interface";
import {adminUpdateCategoryDto} from "../categories/dto/admin-update.category.dto";

@ApiTags('admin')
@Controller('admin')
export class AdminCategoryController {
  constructor(private readonly categoriesService:CategoriesService) {}



       // create  admin category
       @ApiBearerAuth()
       @ApiBody({type:CreateCategoryDto})
       @Post('categories/create')
       @Roles(Role.L2A_ADMIN)
       async  create(@Body() createCategoryDto: CreateCategoryDto):Promise<category>
       {
           return this.categoriesService.createCategory(createCategoryDto);
       }




       // get all categories and search by name
       @ApiBearerAuth()
       @ApiQuery({ name: 'categoryName', required: false })
     //  @Get('categories/search')adminUserSearch
       @Get('adminCategories')
       @Roles(Role.L2A_ADMIN)
       async getReview(@Query('page') page: number = 1,@Query('categoryName') categoryName?: string):Promise<paginationCategoryInterface>
       {

            console.log("category")
            return this.categoriesService.getAllAdminCategories(page,categoryName);
       }




       // update category
       @ApiBearerAuth()
       @ApiBody({type:updateCategoryDto})
       @Patch('categories/update')
       @Roles(Role.L2A_ADMIN)
       async updateCategory(@Body() updateCategoryDto: updateCategoryDto):Promise<{ message: string, updateCategory: updateCategoryInterface }>
       {
            return this.categoriesService.updateCategory(updateCategoryDto);
       }



      // delete category
      @ApiBearerAuth()
      @Delete('categories/delete')
      @Roles(Role.L2A_ADMIN)
      async deleteCategory(@Query('id') id:string):Promise<{ message: string, deletedCategory: category }>
      {
          return this.categoriesService.deleteCategory(id);
      }




      // admin update category status
      @ApiBearerAuth()
      @ApiBody({type:adminUpdateCategoryDto})
      @Patch('categories/update/status')
      @Roles(Role.L2A_ADMIN)
      async adminUpdateCategory(@Body() adminUpdateCategoryDto:adminUpdateCategoryDto)
      {
          return this.categoriesService.adminUpdateCategory(adminUpdateCategoryDto);
      }




      // // category by name search
      // @Get()
      // async search(@Query('query') query: string)
      // {
      //     return this.categoriesService.search(query);
      // }

}

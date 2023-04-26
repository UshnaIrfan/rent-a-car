import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  Query,
  Req,
  UseGuards,
  HttpCode, HttpStatus
} from "@nestjs/common";
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { ApiBearerAuth, ApiBody, ApiTags } from "@nestjs/swagger";
import { category } from "./schemas/category.schema";
import {updateCategoryDto} from "./dto/update-category.dto";
import updateCategoryInterface from "./interfaces/update-category.interface";
import { seller } from "../sellers/schemas/seller.schema";
import {RoleGuard} from "../../guards/role.guard";
import {Role} from "../../enums/role.enum";
import {Roles} from "../../decorators/role.decorators";

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(
    private readonly categoriesService: CategoriesService
  ) {}


       // create category
       //  @ApiBearerAuth()
         @ApiBody({type:CreateCategoryDto})
         @Post('create')
       //  @Roles(Role.L2A_ADMIN)
         async  create(@Body() createCategoryDto: CreateCategoryDto):Promise<category>
         {
          return this.categoriesService.createCategory(createCategoryDto);
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
       @Patch('update')
       async updateCategory(@Body() updateCategoryDto: updateCategoryDto):Promise<{ message: string, updateCategory: updateCategoryInterface }>
       {
         return this.categoriesService.updateCategory(updateCategoryDto);
       }



       // delete category
       @Delete('delete')
       async deleteCategory(@Query('id') id:string):Promise<{ message: string, deletedCategory: category }>
       {
           return this.categoriesService.deleteCategory(id);
       }




       //  common sellers
       @Get('/other/:id')
       async get(@Param('id') id: string):Promise<{ records: seller[] | null }>
       {
          return this.categoriesService.get(id);
       }






     @Get('/:category_id')
     async getReviewsPositive(
     @Param('category_id') categoryId: string)
     {
       return  this.categoriesService.getReviewsPositive(categoryId);
     }







}

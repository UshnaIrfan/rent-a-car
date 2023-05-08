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


@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(
    private readonly categoriesService: CategoriesService
  ) {}


          // get all categories
          @Get('all-categories')
          async getAllCategories():Promise<{ records: category[] }>
          {
              return this.categoriesService.getAllCategories();
          }



          // get category by ID
          @Get('/id/:category_id')
          async  getCategoryByID(@Param('category_id') id: string):Promise<{ records: category }>
          {
            return this.categoriesService.getCategoryById(id);
          }




         //  common sellers
         @Get('/other/:categoryId')
         async get(
         @Param('categoryId') categoryId: string,
         @Query('excludeSeller') excludeSellerId: string)
         {
            return this.categoriesService.get(categoryId, excludeSellerId);
         }





         // latest positive review
         @Get('/:category_id')
         async getReviewsPositive(
         @Param('category_id') categoryId: string)
         {

            console.log("here")
            return  this.categoriesService.getReviewsPositive(categoryId);
         }




         // category by name search
         // @Get()
         // async search(@Query('query') query: string)
         // {
         //    return this.categoriesService.search(query);
         // }




}

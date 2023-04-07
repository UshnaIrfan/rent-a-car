import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException
} from "@nestjs/common";
import {CategoryRepository} from "./category.repository";
import createCategoryInterface from "./interfaces/create-category.interface";
import { category } from "./schemas/category.schema";

@Injectable()
export class CategoriesService {
  constructor(
    private readonly categoryRepository:CategoryRepository,
  ) {}


      // create category (hidden)
     //  async createCategory(createCategory:createCategoryInterface):Promise<category>
     //  {
     //
     //    const  categoryName= await this.categoryRepository.getCategoryByName(createCategory.categoryName);
     //    if (categoryName)
     //    {
     //      throw new ConflictException(' category_name already exists');
     //    }
     //    try
     //    {
     //      const category = await this.categoryRepository.createCategory(createCategory);
     //      return category;
     //    }
     //    catch (e)
     //    {
     //     throw new BadRequestException('Category creation failed');
     //    }
     //
     // }




      // get category by id
       async getCategoryById(id: string):Promise<{ records: category }>
       {
          const category = await this.categoryRepository.getCategoryId(id)
          if (!category)
          {
            throw new  NotFoundException('categories do not exist');
          }

           return { records: category};
      }




        // get all categories
        async getAllCategories() :Promise<{ records: category[] }>
        {
          const categories = await this.categoryRepository.getAllCategories()
          if (!categories)
          {
            throw new  NotFoundException('categories do not exist');
          }

          return { records: categories};
        }



}

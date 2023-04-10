import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import {CategoryRepository} from "./category.repository";
import createCategoryInterface from "./interfaces/create-category.interface";
import { category } from "./schemas/category.schema";
import updateCategoryInterface from "./interfaces/update-category.interface";


@Injectable()
export class CategoriesService {
  constructor(
    private readonly categoryRepository:CategoryRepository,
  ) {}


      // create category (hidden)
      async createCategory(createCategory:createCategoryInterface):Promise<category>
      {

        const  categoryName= await this.categoryRepository.getCategoryByName(createCategory.categoryName);
        if (categoryName)
        {
          throw new ConflictException(' category_name already exists');
        }
        try
        {
          const category = await this.categoryRepository.createCategory(createCategory);
          return category;
        }
        catch (e)
        {
         throw new BadRequestException('Category creation failed');
        }

     }




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




       // update category
       async updateCategory(updateCategory:updateCategoryInterface):Promise<{ message: string, updateCategory: updateCategoryInterface }>
       {

        const update = await this.categoryRepository.updateCategory(updateCategory.id, updateCategory.categoryName);
        if (!update)
        {
           throw new NotFoundException('Category not found');
        }

         return { message: "Category updated successfully", updateCategory};
      }





       // delete category
       async deleteCategory(id:string): Promise<{ message: string, deletedCategory: category }>
       {

          const deletedCategory = await this.categoryRepository.deleteCategory(id);
          if (!deletedCategory)
          {
              throw new NotFoundException('Category not found');
          }


           return { message: "Category deleted successfully", deletedCategory };
       }




}

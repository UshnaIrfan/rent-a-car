import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import {CategoryRepository} from "./category.repository";
import createCategoryInterface from "./interfaces/create-category.interface";
import { category } from "./schemas/category.schema";
import deleteCategoryInterface from "./interfaces/delete-category.interface";
import updateCategoryInterface from "./interfaces/update-category.interface";

@Injectable()
export class CategoriesService {
  constructor(
    private readonly categoryRepository:CategoryRepository,
  ) {}


  // create category
     async createCategory(createCategory:createCategoryInterface):Promise<category>
     {
       const  category_ID= await this.categoryRepository.getCategoryById(createCategory.category_ID);
       if (category_ID)
       {
         throw new BadRequestException('category_ID already exists');
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



    // get category by using name
    async getCategoryByName(category_name: string)
    {
     const getcategory=  await this.categoryRepository.getCategoryByName(category_name);

     if (!getcategory)
      {
       return { message: "Category with  the given name not found" };
      }

        return {
       record: getcategory
        };

   }



   // get category by id
      async getCategoryById(category_ID:string )
      {
        const Getcategory = await this.categoryRepository.getCategoryById(category_ID)
        if(!Getcategory)
         {
          return { message: "Category with  the given ID not found" };
         }

         return {
          record: Getcategory
        };

     }



     //update category
     async updateCategory(updateCategory:updateCategoryInterface)
     {
      const update= await this.categoryRepository.updateCategory(updateCategory.category_ID, updateCategory.category_name);
      if (!update)
      {
       return { message: "Category with given ID not found" };
      }

      return {
      message: 'Category updated successfully',
      record: update
     };
  }



    // delete category
    async deleteCategory(deleteCategory:deleteCategoryInterface)
    {
      const Delete= await this.categoryRepository.deleteCategory(deleteCategory.category_ID )
      if(!Delete)
     {
       return { message: "Category with given ID not found" };
     }

     return {
      message: 'Category  deleted successfully',
    };
  }



}

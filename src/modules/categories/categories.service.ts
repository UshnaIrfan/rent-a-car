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
       const  categoryId= await this.categoryRepository.getCategoryById(createCategory.categoryId);
       if (categoryId)
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
    async getCategoryByName(categoryName: string)
    {
     const getcategory=  await this.categoryRepository.getCategoryByName(categoryName);

     if (!getcategory)
      {
       return { message: "Category with  the given name not found" };
      }

        return {
       record: getcategory
        };

    }



   // get category by id
      async getCategoryById(categoryId:string )
      {
        const Getcategory = await this.categoryRepository.getCategoryById(categoryId)
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
      const update= await this.categoryRepository.updateCategory(updateCategory.categoryId, updateCategory.categoryName);
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
      const Delete= await this.categoryRepository.deleteCategory(deleteCategory.categoryId )
      if(!Delete)
     {
       return { message: "Category with given ID not found" };
     }

     return {
      message: 'Category  deleted successfully',
    };
  }



}

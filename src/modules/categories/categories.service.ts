import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
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

        const  categoryName= await this.categoryRepository.getCategoryByName(createCategory.categoryName);
        if (categoryName)
        {
          throw new BadRequestException(' category_name already exists');
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
            throw new UnauthorizedException('categories do not exist');
          }
           return { records: category};
      }




        // get all categories
        async getAllCategories() :Promise<{ records: category[] }>
        {
          const categories = await this.categoryRepository.getAllCategories()
          if (!categories)
          {
             throw new UnauthorizedException('categories do not exist');
          }

          return { records: categories};
        }



  //   // get category by using name
  //   async getCategoryByName(categoryName: string)
  //   {
  //    const getCategory=  await this.categoryRepository.getCategoryByName(categoryName);
  //
  //    if (!getCategory)
  //     {
  //      return { message: "Category with  the given name not found" };
  //     }
  //
  //       return {
  //      record: getCategory
  //       };
  //
  //   }
  //
  //
  //
  //  // get category by id
  //     async getCategoryById(categoryId:string )
  //     {
  //       const category = await this.categoryRepository.getCategoryById(categoryId)
  //       if(!category)
  //        {
  //         return { message: "Category with  the given ID not found" };
  //        }
  //
  //        return {
  //         record: category
  //       };
  //
  //    }
  //
  //
  //
  //    //update category
  //    async updateCategory(updateCategory:updateCategoryInterface)
  //    {
  //     const update= await this.categoryRepository.updateCategory(updateCategory.categoryId, updateCategory.categoryName);
  //     if (!update)
  //     {
  //      return { message: "Category with given ID not found" };
  //     }
  //
  //     return {
  //     message: 'Category updated successfully',
  //     record: update
  //    };
  //   }
  //
  //
  //
  //   // delete category
  //   async deleteCategory(deleteCategory:deleteCategoryInterface)
  //   {
  //     const Delete= await this.categoryRepository.deleteCategory(deleteCategory.categoryId )
  //     if(!Delete)
  //    {
  //      return { message: "Category with given ID not found" };
  //    }
  //
  //    return {
  //     message: 'Category  deleted successfully',
  //   };
  // }



}

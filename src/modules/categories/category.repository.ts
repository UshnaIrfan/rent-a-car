import { Injectable} from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {category} from "./schemas/category.schema";
import {CreateCategoryDto} from "./dto/create-category.dto";

@Injectable()
export class CategoryRepository {
  constructor(@InjectRepository(category) private categoryModel: Repository<category>) {
  }


     // create category
     async createCategory(category: CreateCategoryDto): Promise<category | null>
     {
       return this.categoryModel.save(category);
     }


     // get category by using name
     async getCategoryByName(categoryName:string): Promise<category[] | null>
     {
      const category = await this.categoryModel.find(
        {
              where: { categoryName},
        });

        if (category.length === 0)
         {
          return null;
         }

        return category;
    }



       // get category by Id
       async getCategoryById(categoryId:string): Promise<category|null>
       {
         return  this.categoryModel.findOne(
           {
                where: { categoryId },
            })
       }




       //update category
       async updateCategory(categoryId: string, categoryName: string): Promise<category | null>
       {
        const category = await this.categoryModel.findOne(
          {
               where: { categoryId},
             });

         if (!category)
          {
           return null;
          }

         category.categoryName = categoryName;
         return this.categoryModel.save(category);
      }




    // delete category
      async deleteCategory(categoryId: string): Promise<boolean>
      {
        const category = await this.categoryModel.findOne({ where: { categoryId } });
        if (!category)
         {
           return false;
         }
       await this.categoryModel.remove(category);
       return true;
     }



}


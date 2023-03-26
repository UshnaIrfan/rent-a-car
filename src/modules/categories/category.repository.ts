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
     async getCategoryByName(category_name:string): Promise<category[] | null>
     {
      const category = await this.categoryModel.find(
        {
              where: { category_name },
        });

        if (category.length === 0)
         {
          return null;
         }

        return category;
    }



       // get category by Id
       async getCategoryById(category_ID:string): Promise<category|null>
       {
         return  this.categoryModel.findOne(
           {
                where: { category_ID },
            })
       }




       //update category
       async updateCategory(category_ID: string, category_name: string): Promise<category | null>
       {
        const category = await this.categoryModel.findOne(
          {
               where: { category_ID},
             });

         if (!category)
          {
           return null;
          }

         category.category_name = category_name;
         return this.categoryModel.save(category);
      }




    // delete category
      async deleteCategory(category_ID: string): Promise<boolean>
      {
        const category = await this.categoryModel.findOne({ where: { category_ID } });
        if (!category)
         {
           return false;
         }
       await this.categoryModel.remove(category);
       return true;
     }



}


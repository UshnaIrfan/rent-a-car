import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import {  Repository } from "typeorm";
import {category} from "./schemas/category.schema";
import {CreateCategoryDto} from "./dto/create-category.dto";
import {updateCategoryDto} from "./dto/update-category.dto";

@Injectable()
export class CategoryRepository {
  constructor(@InjectRepository(category) private categoryModel: Repository<category>
  ) {}


      // create category
      async createCategory(category: CreateCategoryDto): Promise<category | null>
      {
         return this.categoryModel.save(category);
      }



      // get category by name
      async getCategoryByName(categoryName:string): Promise<category | null>
      {
       const category = await this.categoryModel.findOne(
      {
             where: { categoryName},
       });

         return category;
      }



       // get category by id associated sellers
       async getCategoryId(id: string): Promise<category|null>
       {
         const category = await this.categoryModel.findOne({
          where: { id },
          relations: ['sellers'],
          });
           return category;
       }



        // get all categories
        async getAllCategories(): Promise<category[] |null>
        {
           return this.categoryModel.find();
        }



       // get category by id
        async getCategoryById(id:string): Promise<category |null>
        {
            const category = await this.categoryModel.findOne(
      {
               where:{id}
             })
           return category;
        }





       // delete category
      async deleteCategory(id: string): Promise<category | null>
      {
         const category = await this.categoryModel.findOne({ where: { id } });
         if (!category)
         {
             throw new NotFoundException('Category not found');
         }

          return await this.categoryModel.remove(category);
     }





      // update category
      async updateCategory(id:string, categoryName:string): Promise<category | null>
      {
          const category = await this.categoryModel.findOne(
          {
                  where: { id},
              });

          if (!category)
          {
             throw new NotFoundException('Category not found');
          }

          category.categoryName = categoryName;
          return this.categoryModel.save(category);
    }



}


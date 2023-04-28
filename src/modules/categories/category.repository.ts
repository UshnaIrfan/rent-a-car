import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import {Not, Repository } from "typeorm";
import {category} from "./schemas/category.schema";
import {CreateCategoryDto} from "./dto/create-category.dto";


@Injectable()
export class CategoryRepository {
  constructor(@InjectRepository(category) private categoryModel: Repository<category>,
  ) {}


      // create category
      async createCategory(category: CreateCategoryDto):Promise<category | null>
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
              return null
          }

          return await this.categoryModel.remove(category);
      }





        // update category
       async updateCategory(id:string, categoryName:string): Promise<category | null>
       {
          const category = await this.categoryModel.findOne({ where: { id}});
          if (!category)
          {
             return null
          }
          category.categoryName = categoryName;
          return this.categoryModel.save(category);
      }




      // common seller
     //  async getCommonSellers(id: string, sellers: seller[]):Promise<seller[]>
     //  {
     //      const otherCategories = await this.categoryModel.find({
     //          where: { id: Not(id) },
     //          relations: ['sellers'],
     //        });
     //
     //
     //     const otherSellers = otherCategories.reduce((acc, cur) => {
     //     return acc.concat(cur.sellers);
     //      }, []);
     //
     //     return sellers.filter(seller => {
     //     return otherSellers.some(s => s.id === seller.id);
     //     });
     //
     // }

       async getCommonSellers(categoryId: string, excludeSellerId: string): Promise<category[]>
       {
          const category = await this.categoryModel.findOne({
          where: { id: categoryId },
          relations: ['sellers'],
          });

         if (!category)
         {
           throw new NotFoundException('Category not found');
         }

        const filteredSellers = category.sellers.filter(seller => seller.id !== excludeSellerId);

        if (filteredSellers.length === category.sellers.length)
        {
           throw new NotFoundException('Seller not associated with this category');
        }

          category.sellers = filteredSellers;
          return [category];
      }




        //  get all categories(pagination)
        async findAndCount(skip: number, take: number): Promise<[category[], number]>
        {
            const [result, totalCount] = await this.categoryModel.findAndCount({
            skip,
            take,
         });
            return [result, totalCount];
        }





          // admin update category status
         async adminUpdateCategory(categoryId:string, approvedByAdmin:string) : Promise<category | null>
         {
            const category = await this.categoryModel.findOne({ where: { id:categoryId}});
            if (!category)
            {
               return null
            }
             category.approvedByAdmin = approvedByAdmin;
            return this.categoryModel.save(category);
         }



}


import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from "typeorm";
import {category} from "./schemas/category.schema";
import {CreateCategoryDto} from "./dto/create-category.dto";
import {status} from "./schemas/category.schema";

@Injectable()
export class CategoryRepository {
  constructor(@InjectRepository(category) private categoryModel: Repository<category>,
  ) {}



         //ADMIN APS
         // create category
         async createCategory(category: CreateCategoryDto):Promise<category | null>
         {
             return this.categoryModel.save(category);
         }



        // get category by name
         async getCategoryByName(categoryName:string): Promise<category | null>
         {
            const category = await this.categoryModel.findOne({ where: { categoryName}});
            return category;
         }




        // get all categories and search by name( pagination)
        async findAndCount(skip: number, take: number, categoryName?: string): Promise<[category[], number]>
        {
           const whereConditions: any[] = [];
           if (categoryName)
           {
             whereConditions.push({
               categoryName: Like(`${categoryName}%`)});
           }

          const [result, totalCount] = await this.categoryModel.findAndCount({
          where: whereConditions,
          skip,
          take,
          order: { categoryName: 'ASC' },
           });

          if (!result.length)
          {
             throw new NotFoundException('No category were found matching the criteria.');
          }
             return [result, totalCount];
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




        async GetCategoryId(id: string): Promise<category|null>
        {
            const category = await this.categoryModel.findOne({
            where: { id},
            relations: ['sellers'],
          });

           if (!category)
           {
             throw new NotFoundException('Category not found');
           }
           return category;
       }



      //  // category by name search
      //  async search(query: string): Promise<category[]|null>
      //  {
      //     const records = await this.categoryModel.find({
      //     where: { categoryName: Like(`${query}%`)} });
      //     if (!records.length)
      //     {
      //        throw new NotFoundException('No categories were found matching the search data');
      //     }
      //     return records;
      // }








       // FRONTEND APIS
       // get category by id associated sellers
       async getCategoryId(id: string): Promise<category|null>
       {
          const category = await this.categoryModel.findOne({
          where: { id ,approvedByAdmin:status.APPROVED },
          relations: ['sellers'],
          });

         if (!category)
         {
            throw new NotFoundException('Category not found');
         }

         category.sellers = category.sellers.filter((seller) => seller.approvedByAdmin === status.APPROVED && seller.isListing===true);
         return category;
       }




      // get all categories
       async getAllCategories(): Promise<category[] |null>
       {
            return  this.categoryModel.find({ where: { approvedByAdmin: status.APPROVED, },
            order: {categoryName: 'ASC' } });
       }




       // get category by id
        async getCategoryById(id:string): Promise<category |null>
        {
            const category = await this.categoryModel.findOne({where:{id}})
            return category;
        }





        // common seller
        async getCommonSellers(categoryId: string, excludeSellerId: string): Promise<category[]>
        {
          const category = await this.categoryModel.findOne(
         {
            where: { id: categoryId, approvedByAdmin: status.APPROVED },
           relations: ['sellers'],
          });

         if (!category)
         {
            throw new NotFoundException('Category not found');
         }


        const filteredSellers = category.sellers.filter((seller) => seller.id !== excludeSellerId && seller.approvedByAdmin === status.APPROVED && seller.isListing===true);
        if (filteredSellers.length === 0)
        {
           throw new NotFoundException('No approved seller found for this category');
        }

         category.sellers = filteredSellers;
         return [category];
    }



}


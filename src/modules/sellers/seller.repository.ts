import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { In, Like, Repository } from "typeorm";
import {seller} from "./schemas/seller.schema";
import {CreateSellerDto} from "./dto/create-seller.dto";
import {status} from "./schemas/seller.schema";
import { category } from "../categories/schemas/category.schema";
import {CategoryRepository} from "../categories/category.repository";

@Injectable()
export class sellerRepository{
  constructor(
    @InjectRepository(seller)
    private sellerModel: Repository<seller>,
    private readonly CategoryRepository:CategoryRepository,
  ) {}


      //ADMIN APIS
      // create seller
      async createSeller(body: CreateSellerDto):Promise<seller|null>
      {
         const seller = await this.sellerModel.create();
         seller.sellerName = body.sellerName;
         seller.sellerUrl = body.sellerUrl;
         seller.approvedByAdmin = body.approvedByAdmin;
         seller.isListing = body.isListing;
         await this.sellerModel.save(seller);
         return seller
     }




      // update seller
      async updateSeller(id:string, sellerName:string,sellerUrl:string): Promise<seller | null>
      {
         const seller = await this.sellerModel.findOne({ where: { id}});
         if (!seller)
         {
           return null
         }

          seller.sellerName = sellerName;
          seller.sellerUrl = sellerUrl;
          return this.sellerModel.save(seller);
      }





      // delete seller
      async deleteSeller(id: string): Promise<seller | null>
      {
         const seller = await this.sellerModel.findOne({ where: { id } });
         if (!seller)
         {
           return null
         }
       return await this.sellerModel.remove(seller);
      }





      // get all sellers(pagination)
       async findAndCount(skip: number, take: number):Promise<[seller[], number]>
       {
           const [result, totalCount] = await this.sellerModel.findAndCount({
           skip,
           take,
          relations: ['categories'],
       });
         return [result, totalCount];
    }




      //admin update seller status
      async adminUpdateSeller(sellerId:string, approvedByAdmin:string,isListing:boolean): Promise<seller | null>
      {
          const seller = await this.sellerModel.findOne({ where: { id:sellerId}});
          if (!seller)
          {
             return null
          }

         seller.approvedByAdmin = approvedByAdmin;
         seller.isListing = isListing;
         return this.sellerModel.save(seller);
      }



      // seller by name search
    //   async search(query: string, categoryId?: string): Promise<seller[]|null>
    //   {
    //      if (categoryId)
    //      {
    //         const category = await this.CategoryRepository.getCategoryById(categoryId);
    //         if (!category)
    //         {
    //           throw new NotFoundException('Category not found.');
    //         }
    //         const records = await this.sellerModel.find({
    //         where: {
    //            sellerName: Like(`${query}%`),
    //            categories: { id: categoryId }
    //           },
    //         relations: ['categories']
    //        });
    //
    //        if (!records.length)
    //        {
    //          throw new NotFoundException('No sellers were found in this category matching the search criteria.');
    //        }
    //       return records;
    //    }
    //    else
    //    {
    //      const records = await this.sellerModel.find({
    //       where: { sellerName: Like(`${query}%`)},
    //       });
    //       if (!records.length)
    //       {
    //          throw new NotFoundException('No sellers were found matching the search criteria.');
    //      }
    //      return records;
    //
    //   }
    // }
        async search(skip: number,take:number, query?: string, categoryId?: string):Promise<[seller[], number]>
        {
         if (categoryId)
         {
            const category = await this.CategoryRepository.getCategoryById(categoryId);
            if (!category)
            {
                 throw new NotFoundException('Category not found.');
            }

           const [result, totalCount] = await this.sellerModel.findAndCount(
          {
            where: {
                 sellerName: Like(`${query}%`),
                 categories: { id: categoryId }
             },
             relations: ['categories'],
             skip,
             take,
            });
           if (!result.length)
           {
               throw new NotFoundException('No sellers were found in this category matching the search criteria.');
           }
            return [ result, totalCount];
        }

       else if (query && !categoryId)
       {
           const [result, totalCount] = await this.sellerModel.findAndCount(
           {
               where: { sellerName: Like(`${query}%`) },
               skip,
              take ,
           });
          if (!result.length)
          {
              throw new NotFoundException('No sellers were found matching the search criteria.');
          }
        return [
          result,
          totalCount,
        ];
     }

    else
    {
        const [result, totalCount] = await this.sellerModel.findAndCount({
           skip,
           take,
          relations: ['categories'],
        });
      if (!result.length)
      {
          throw new NotFoundException('No sellers were found matching the search criteria.');
      }

      return [
         result,
         totalCount,
      ];
    }
  }




      //FRONTEND APIS
      // create seller with associated categories
       async sellerCategories(body:seller):Promise<seller|null>
       {
         return this.sellerModel.save(body);
       }




       // get seller by url
       async getSellerUrl(sellerUrl:string): Promise<seller|null>
       {
           return  this.sellerModel.findOne({ where: { sellerUrl }})
       }



       // get seller by ID (associated categories)
       async getSellerById(id: string): Promise<seller|null>
       {
         const seller = await  this.sellerModel.findOne(
          {
            where: { id, approvedByAdmin: status.APPROVED ,isListing:true},
            relations: ['categories'],
          });
         const approvedCategories = seller.categories.filter(category => category.approvedByAdmin === status.APPROVED);

         seller.categories = approvedCategories;

         return seller;
       }





       // get all sellers
       // async getAllSellers(): Promise<seller[]|null>
       // {
       //
       //   return  this.sellerModel.find({
       //     where: {
       //       approvedByAdmin: status.APPROVED,
       //       isListing:true,
       //     },
       //   });
       // }



         async getAllSellers(): Promise<seller[]>
         {
            const sellers = await this.sellerModel.find({
             relations: ['categories'],
             where: {
                categories: { approvedByAdmin: status.APPROVED },
                approvedByAdmin: status.APPROVED,
                isListing: true
              }
               });

            return sellers;
        }



       //get seller ID
       async getSellerId(id:string): Promise<seller|null>
       {
         return  this.sellerModel.findOne({ where: { id ,approvedByAdmin: status.APPROVED } })
       }






}


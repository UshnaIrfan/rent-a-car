import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from "typeorm";
import {seller} from "./schemas/seller.schema";
import {CreateSellerDto} from "./dto/create-seller.dto";
import {status as sellerStatus } from "./schemas/seller.schema";
import {CategoryRepository} from "../categories/category.repository";
import { reviewRepository } from "../review/respositories/review.respository";
import { category, status, status as categoryStatus } from "../categories/schemas/category.schema";

@Injectable()
export class sellerRepository{
  constructor(
    @InjectRepository(seller)
    private sellerModel: Repository<seller>,
    private readonly CategoryRepository:CategoryRepository,
    private readonly ReviewRepository:reviewRepository
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


         if (seller.sellerUrl === sellerUrl)
         {
              seller.sellerName = sellerName;
              seller.sellerUrl = sellerUrl;
              return this.sellerModel.save(seller);
         }


         // Check if the new seller url already exists in the database
         const existingSeller = await this.sellerModel.findOne({ where: { sellerUrl } });
         if (existingSeller && existingSeller.id !== seller.id)
         {
              throw new ConflictException('seller url already exists. Please enter a unique url');
         }

          seller.sellerName = sellerName;
          seller.sellerUrl = sellerUrl;
          return this.sellerModel.save(seller);
      }





      // delete seller
      async deleteSeller(id: string): Promise<seller | null>
      {

         const seller = await this.sellerModel.findOne({
          where: { id  },
          relations: ['review'],
        });

         const reviews = seller.review;
         if (reviews && reviews.length > 0)
         {
            for (const review of reviews)
            {
               await this.ReviewRepository.delete(review.id);
            }
         }
            return  await this.sellerModel.remove(seller);

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





       // seller search by name
        async search(skip: number,take:number, query?: string, categoryId?: string):Promise<[seller[], number]>
        {
          if (categoryId && query)
          {
             const category = await this.CategoryRepository.getCategorybyId(categoryId);
             if (!category)
             {
                 throw new NotFoundException('Category not found.');
             }

            const [result, totalCount] = await this.sellerModel.findAndCount(
          {
            where: {
                 sellerName: Like(`${query}%`),
                 categories: { id: categoryId },
             },
             order: {sellerName: 'ASC' },
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

         else if (categoryId )
         {
            const category = await this.CategoryRepository.getCategorybyId(categoryId);
            if (!category)
            {
              throw new NotFoundException('Category not found.');
            }

            const [result, totalCount] = await this.sellerModel.findAndCount(
              {
                where: {
                  categories: { id: categoryId },
                },
                order: {sellerName: 'ASC' },
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
               order: {sellerName: 'ASC' },
               relations: ['categories'],
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

           order: {sellerName: 'ASC' },
           skip,
           take,
          relations: ['categories'],
          where: { categories: { approvedByAdmin: categoryStatus.APPROVED } },

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


    //     async search(skip: number, take: number, query?: string, categoryId?: string): Promise<[seller[], number]>
    //     {
    //         let whereConditions = {} as {
    //            sellerName?: any,
    //            categories?: { id: string },
    //        };
    //
    //
    //        if (query && categoryId)
    //        {
    //            const category = await this.CategoryRepository.getCategorybyId(categoryId);
    //            if (!category)
    //            {
    //               throw new NotFoundException('Category not found.');
    //            }
    //
    //          whereConditions = {
    //             sellerName: Like(`${query}%`),
    //             categories: { id: categoryId },
    //          };
    //        }
    //
    //       else if (categoryId)
    //       {
    //           const category = await this.CategoryRepository.getCategorybyId(categoryId);
    //           if (!category)
    //           {
    //             throw new NotFoundException('Category not found.');
    //           }
    //
    //           whereConditions = {
    //             categories: { id: categoryId },
    //         };
    //      }
    //      else if (query)
    //      {
    //             whereConditions = {
    //               sellerName: Like(`${query}%`),
    //         };
    //      }
    //
    //
    //      const [result, totalCount] = await this.sellerModel.findAndCount({
    //          where: Object.keys(whereConditions).length !== 0
    //            ? [{ ...whereConditions, categories: { approvedByAdmin: categoryStatus.APPROVED } }]
    //            : { categories: { approvedByAdmin: categoryStatus.APPROVED} },
    //          order: { sellerName: 'ASC' },
    //          relations: ['categories'],
    //          skip,
    //          take,
    //        });
    //
    //
    //      if (!result.length)
    //      {
    //        throw new NotFoundException('No sellers were found matching the search criteria.');
    //      }
    //
    //      return [result, totalCount];
    //
    // }



       // get all sellers
        async getAllSeller(): Promise<seller[]|null>
        {
          return  await this.sellerModel.find()
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
            where: { id, approvedByAdmin: sellerStatus.APPROVED ,isListing:true},
            relations: ['categories'],
          });
          if (!seller)
          {
             throw new NotFoundException('seller not found');
          }
         const approvedCategories = seller.categories.filter(category => category.approvedByAdmin === sellerStatus.APPROVED);
         seller.categories = approvedCategories;
         return seller;
       }





        // get all sellers
         async getAllSellers(): Promise<seller[]|null>
         {
             const sellers = await this.sellerModel.find({
             relations: ['categories'],
             where: {
                categories: { approvedByAdmin: sellerStatus.APPROVED },
                approvedByAdmin: sellerStatus.APPROVED,
                isListing: true,
              },
              order: {sellerName: 'ASC' },
             });

             const uniqueSellerNames: string[] = [];

             for (const seller of sellers)
             {
               if (!uniqueSellerNames.includes(seller.sellerName))
               {
                   uniqueSellerNames.push(seller.sellerName);
               }
             }
           //  return  uniqueSellerNames
            return sellers;

        }



        //get seller ID
        async getSellerId(id:string): Promise<seller|null>
        {

           return  this.sellerModel.findOne({ where: { id ,approvedByAdmin:sellerStatus.APPROVED } })
        }





        // unique seller show
        async getUniqueSeller(id:string): Promise<any>
        {
             const seller = await  this.sellerModel.findOne({
             where: { id, approvedByAdmin: sellerStatus.APPROVED ,isListing:true},
             relations: ['categories']
             });
            if (!seller)
            {
                 throw new NotFoundException('seller not found');
            }

            const approvedCategories = seller.categories.filter(category => category.approvedByAdmin === sellerStatus.APPROVED);
            if (approvedCategories.length === 0)
            {
                throw new NotFoundException('no category  exit against the seller id');
            }
            seller.categories = approvedCategories;
            const results = [];
            for(const categories of approvedCategories)
            {
                const result = await this.CategoryRepository.getCategoryId( categories.id);
                const categorySellers = result.sellers.filter((seller) => seller.id !== id);
                results.push({ categories, sellers: categorySellers});

            }
            return  results

        }


}


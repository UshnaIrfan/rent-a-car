import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {seller} from "./schemas/seller.schema";
import {CreateSellerDto} from "./dto/create-seller.dto";
import { category } from "../categories/schemas/category.schema";
import { review } from "../review/schemas/submit-review.schema";

@Injectable()
export class sellerRepository{
  constructor(
    @InjectRepository(seller)
    private sellerModel: Repository<seller>
  ) {}


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
        return this.sellerModel.findOne(
          {
            where: { id },
            relations: ['categories'],
          });
       }



       // get all sellers
       async getAllSellers(): Promise<seller[]|null>
       {
         return this.sellerModel.find();
       }


       //get seller ID
       async getSellerId(id:string): Promise<seller|null>
       {
         return  this.sellerModel.findOne({ where: { id } })
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
      async findAndCount(skip: number, take: number): Promise<[seller[], number]>
      {
        const [result, totalCount] = await this.sellerModel.findAndCount({
        skip,
        take,
       });
        return [result, totalCount];
     }





      //admin update seller status
      async adminUpdateSeller(sellerId:string, approvedByAdmin:boolean,isListing:boolean): Promise<seller | null>
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




}


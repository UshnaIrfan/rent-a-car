import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {seller} from "./schemas/seller.schema";
import {CreateSellerDto} from "./dto/create-seller.dto";
import { category } from "../categories/schemas/category.schema";

@Injectable()
export class sellerRepository{
  constructor(
    @InjectRepository(seller)
    private sellerModel: Repository<seller>
  ) {}


      // create seller
      async createSeller(body: CreateSellerDto & { userId: string }):Promise<seller|null>
      {
         const seller = await this.sellerModel.create();
         seller.sellerName = body.sellerName;
         seller.sellerUrl = body.sellerUrl;
         seller.approvedByAdmin = body.approvedByAdmin;
         seller.isListing = body.isListing;
         seller.userId = body.userId;
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
               throw new NotFoundException('seller not found');
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
           throw new NotFoundException('seller not found');
        }

           return await this.sellerModel.remove(seller);
      }







}

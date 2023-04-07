import { Injectable} from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {seller} from "./schemas/seller.schema";
import {CreateSellerDto} from "./dto/create-seller.dto";

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


      // get seller by name
       async getSellerName(sellerName:string): Promise<seller|null>
       {
          return  this.sellerModel.findOne(
      {
               where: { sellerName },
           })
       }



       // get seller by url
       async getSellerUrl(sellerUrl:string): Promise<seller|null>
       {
           return  this.sellerModel.findOne(
      {
              where: { sellerUrl },
          })
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
         return  this.sellerModel.findOne(
         {
              where: { id }
           })
       }



  // create add
      async addSeller(body: CreateSellerDto):Promise<seller|null>
      {
    const seller = await this.sellerModel.create();
    seller.sellerName = body.sellerName;
    seller.sellerUrl = body.sellerUrl;
    seller.approvedByAdmin = body.approvedByAdmin;
    seller.isListing = body.isListing;
    await this.sellerModel.save(seller);
    return seller
  }

}


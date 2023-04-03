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




      // get seller by ID
      async getSellerById(id:string): Promise<seller|null>
      {
          return  this.sellerModel.findOne(
      {
              where: { id },
              relations: ['sellerCategories', 'sellerCategories.category'],
          })
      }



       // get all sellers
       async getAllSellers(): Promise<seller[]|null>
       {
         return this.sellerModel.find();
      }






      // create seller
   //  async createSeller(category: CreateSellerDto)
   //  {
   //    const seller = await this.sellerModel.create();
   //    seller.sellerName =category.sellerName
   //    seller.sellerUrl = category.sellerUrl
   //    seller.approvedByAdmin= category.approvedByAdmin
   //      seller.isListing=category.isListing
   //    return this.sellerModel.save(seller);
   //  //  await this.sellersRepository.save(seller);
   //  //  console.log("here" ,category.sellerName)
   //   // return
   //  //  return this.sellerModel.save(category);
   //  }



      //   async getSellerByCategoryId(sellerId: string): Promise<seller | null>
  //   {
  //       const seller = await this.sellerModel.findOne({
  //        where: {
  //            sellerId: sellerId
  //      },
  //       relations: ['categories'],
  //   });
  //
  //    if (!seller)
  //    {
  //      return null;
  //    }
  //
  //    return seller;
  // }
  //
  //
  //  //  get seller by id
  //  //  async getSellerById(seller_ID:string): Promise<seller|null>
  //  //  {
  //  //      return  this.sellerModel.findOne(
  //  //    {
  //  //         where: { seller_ID },
  //  //      })
  //  //  }
  //
  //
  //     async getSellerById(sellerId: string): Promise<seller | null>
  //     {
  //        const seller = await this.sellerModel.findOne({
  //        where: {
  //            sellerId: sellerId
  //       },
  //          relations: ['categories'],
  //       });
  //
  //        if (!seller)
  //        {
  //          return null;
  //        }
  //
  //        return seller;
  //  }
  //



      //update seller
    //   async updateSeller(sellerId: string, sellerName: string): Promise<seller | null>
    //   {
    //       const seller = await this.sellerModel.findOne(
    //    {
    //              where: { sellerId},
    //         });
    //
    //      if (!seller)
    //      {
    //        return null;
    //      }
    //     seller.sellerName = sellerName;
    //     return this.sellerModel.save(seller);
    // }




     // delete seller
     // async deleteSeller(sellerId: string): Promise<boolean>
     // {
     //   const seller = await this.sellerModel.findOne({ where: { sellerId } });
     //   if (!seller)
     //   {
     //    return false;
     //   }
     //   await this.sellerModel.remove(seller);
     //   return true;
     // }
     //



     // async getSellerByName(sellerName:string): Promise<seller|null>
     // {
     //     return  this.sellerModel.findOne(
     //  {
     //        where: { sellerName},
     //    })




}


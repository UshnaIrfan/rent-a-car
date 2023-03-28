import { Injectable} from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {seller} from "./schemas/seller.schema";
import {CreateSellerDto} from "./dto/create-seller.dto";
import { category } from "../categories/schemas/category.schema";



@Injectable()
export class sellerRepository{
  constructor(@InjectRepository(seller) private sellerModel: Repository<seller>) {
  }


   // create seller
    async sellerCategory(category: CreateSellerDto): Promise<seller | null>
    {
      return this.sellerModel.save(category);
    }


   //  get seller by id
   //  async getSellerById(seller_ID:string): Promise<seller|null>
   //  {
   //      return  this.sellerModel.findOne(
   //    {
   //         where: { seller_ID },
   //      })
   //  }


   //   async getSellerById(seller_ID: string): Promise<seller|null>
   //   {
   //    const seller = await this.sellerModel.createQueryBuilder('seller')
   //    .leftJoinAndSelect('seller.category', 'category')
   //    .where('seller.seller_ID = :seller_ID AND seller.seller_ID = category.category_ID', {
   //      seller_ID,
   //    })
   //    .getOne();
   //
   //    return seller || null;
   //
   // }

     async getSellerById( sellerId: string): Promise<seller|null>
     {

       // return this.sellerModel.findOne({
       //   where: {
       //     id: seller_ID
       //   },
       //   relations: ['categories'],
       // });
       // const seller = await this.sellerModel.createQueryBuilder('seller')
       // .leftJoinAndSelect('seller.categories', 'category')
       // .where('seller.seller_ID = :seller_ID AND category.category_ID = :category_ID', { seller_ID, category_ID: seller_ID })
       // .getOne();

      return

     }




  //update seller
     async updateSeller(sellerId: string, sellerName: string): Promise<seller | null>
     {
       const seller = await this.sellerModel.findOne(
      {
        where: { sellerId},
       });

      if (!seller) {
        return null;
      }
      seller.sellerName = sellerName;
      return this.sellerModel.save(seller);
    }




     // delete seller
     async deleteSeller(sellerId: string): Promise<boolean>
     {
      const seller = await this.sellerModel.findOne({ where: { sellerId } });
      if (!seller)
      {
       return false;
      }
      await this.sellerModel.remove(seller);
      return true;
     }




     async getSellerByName(sellerName:string): Promise<seller|null>
     {
         return  this.sellerModel.findOne(
      {
            where: { sellerName},
        })

      }



}


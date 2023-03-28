import { BadRequestException, Injectable } from "@nestjs/common";
import { seller } from "./schemas/seller.schema";
import createSellerInterface from "./interfaces/create-seller.interface";
import { sellerRepository } from "./seller.repository";
import updateSellerInterface from "./interfaces/update-seller.interface";
import deleteSellerInterface from "./interfaces/delete-seller.interface";

@Injectable()
export class SellerService {
  constructor(
    private readonly SellerRepository:sellerRepository,
  ) {}



    // create seller
     async createseller(createSeller:createSellerInterface):Promise<seller>
     {
       const  sellerId= await this.SellerRepository.getSellerById(createSeller.sellerId);

       if (sellerId)
       {
         throw new BadRequestException('seller_ID already exists');
       }

       const  sellerName= await this.SellerRepository.getSellerByName(createSeller.sellerName);

       if ( sellerName)
       {
         throw new BadRequestException(' seller_name already exists');
       }

         try
         {
         const category = await this.SellerRepository.sellerCategory(createSeller);
         return category;
         }
        catch (e)
        {
        throw new BadRequestException('Category creation failed');
        }


   }



  // get  seller by id
  //    async getSellerById(seller_ID:string )
  //    {
  //     const seller = await this.SellerRepository.getSellerById(seller_ID)
  //     if(!seller)
  //     {
  //      return { message: "seller with  the given ID not found" };
  //     }
  //
  //      return {
  //      record: seller
  //     };
  //
  // }


  //    async getSellerById(seller_ID: string)
  //    {
  //    const seller = await this.SellerRepository.getSellerById(seller_ID);
  //    console.log(seller)
  //     if (!seller)
  //     {
  //      return { message: "Seller with the given ID not found" };
  //     }
  //     return {
  //        record: {
  //          seller_ID: seller.seller_ID,
  //          seller_name: seller.seller_name,
  //          category: seller.category,
  //       },
  //    };
  //
  // }


    async getSellerById(sellerId: string)
    {
     const seller = await this.SellerRepository.getSellerById(sellerId);
     console.log("here" ,seller)
      if (!seller)
      {
         return { message: "Seller with the given ID not found" };
      }
       return {
         seller_ID: seller.sellerId,
         seller_name: seller.sellerName,
         categories: seller.categories.map(category => {
       return {
             category_ID: category.categoryId,
             category_name: category.categoryName
           };
        }),
     };
  }


    //update category
     async updateSeller(updateSeller:updateSellerInterface)
     {
      const update= await this.SellerRepository.updateSeller(updateSeller.sellerId ,updateSeller.sellerName);
      if (!update)
      {
       return { message: "seller with given ID not found" };
      }

      return{
       message: ' seller record updated successfully',
       record: update
      };
    }



    // delete category
     async deleteSeller(deleteSeller:deleteSellerInterface)
     {
      const Delete= await this.SellerRepository.deleteSeller(deleteSeller.sellerId)
      if(!Delete)
      {
        return { message: "seller with given ID not found" };
      }

       return {
      message: 'seller  deleted successfully',
      };
   }



}

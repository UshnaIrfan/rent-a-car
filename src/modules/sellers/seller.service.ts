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
       const  seller_ID= await this.SellerRepository.getSellerById(createSeller.seller_ID);
       if (seller_ID)
       {
         throw new BadRequestException('seller_ID already exists');
       }

       const  seller_name= await this.SellerRepository.getSellerByName(createSeller.seller_name);
       if ( seller_name)
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
     async getSellerById(seller_ID:string )
     {
      const seller = await this.SellerRepository.getSellerById(seller_ID)
      if(!seller)
      {
       return { message: "seller with  the given ID not found" };
      }

       return {
       record: seller
      };

  }


  //  async getSellerById(seller_ID: string)
  //  {
  //   const seller = await this.SellerRepository.getSellerById(seller_ID);
  //   console.log(seller)
  //   if (!seller)
  //    {
  //      return { message: "Seller with the given ID not found" };
  //    }
  //   return {
  //      record: {
  //         seller_ID: seller.seller_ID,
  //         seller_name: seller.seller_name,
  //         category: seller.category,
  //      },
  //    };
  //
  // }



    //update category
     async updateSeller(updateSeller:updateSellerInterface)
     {
      const update= await this.SellerRepository.updateSeller(updateSeller.seller_ID ,updateSeller.seller_name);
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
      const Delete= await this.SellerRepository.deleteSeller(deleteSeller.seller_ID)
      if(!Delete)
      {
       return { message: "seller with given ID not found" };
      }

       return {
      message: 'seller  deleted successfully',
      };

   }



}

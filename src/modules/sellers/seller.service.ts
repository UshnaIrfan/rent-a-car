import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException
} from "@nestjs/common";
import { seller } from "./schemas/seller.schema";
import createSellerInterface from "./interfaces/create-seller.interface";
import updateSellerInterface from "./interfaces/update-seller.interface";
import deleteSellerInterface from "./interfaces/delete-seller.interface";
import {CategoryRepository} from "../categories/category.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import {sellerCategory} from "./schemas/sellerCategory.schema";
import {sellerRepository} from "./seller.repository";
import { category } from "../categories/schemas/category.schema";

@Injectable()
export class SellerService {
  constructor(
      @InjectRepository(sellerCategory)
      private readonly sellerCategoryRepository: Repository<sellerCategory>,

      private readonly CategoryRepository:CategoryRepository,
      private readonly SellerRepository:sellerRepository
  ) {}



    // create seller
      async createseller(body:createSellerInterface):Promise<{record:seller}>
      {
        const sellerName = await this.SellerRepository.getSellerName(body.sellerName)
        if (sellerName)
        {
           throw new ConflictException('Seller name already exists');
        }

       const sellerUrl = await this.SellerRepository.getSellerUrl(body.sellerUrl)
       if (sellerUrl)
       {
          throw new ConflictException('Seller Url already exists');
       }

       const seller = await this.SellerRepository.createSeller(body);

       const categoriesIDs = body.categories;
       for (const categoryID of categoriesIDs)
        {
         const category = await this.CategoryRepository.getCategoryById(categoryID);
         if (!category)
         {
          throw new NotFoundException('Category does not exist');
         }


        const sellerCategory = await this.sellerCategoryRepository.create();
        sellerCategory.seller = seller;
        sellerCategory.category = category;
        await this.sellerCategoryRepository.save(sellerCategory);
      }
        return { record: seller };
    }




     // get seller by ID
      async getSellerById(id:string ) :Promise<{record:seller}>
      {
        const seller = await this.SellerRepository.getSellerById(id)
        if(!seller)
        {
          throw new UnauthorizedException('seller with  the given ID not found');
        }

          return { record: seller };

      }



        // get all sellers
       async getAllSellers( ):Promise<{records:seller[]}>
       {
          const sellers = await this.SellerRepository.getAllSellers()
          if(!sellers)
          {
            throw new UnauthorizedException('sellers do not exist');

          }
            return { records: sellers};
      }






  //     async createseller(body:createSellerInterface)
  //     {
  //
  //      const sellerName = await this.sellersRepository.findOne(
  //      { where: { sellerName: body.sellerName } });
  //      if (sellerName)
  //      {
  //       throw new ConflictException('Seller name already exists');
  //      }
  //
  //     const sellerUrl = await this.sellersRepository.findOne(
  //     { where: { sellerUrl: body.sellerUrl } });
  //
  //      if (sellerUrl)
  //      {
  //       throw new ConflictException('Seller Url already exists');
  //      }
  //
  //     const seller = await this.sellersRepository.create();
  //     seller.sellerName = body.sellerName;
  //     seller.sellerUrl = body.sellerUrl;
  //     seller.approvedByAdmin = body.approvedByAdmin;
  //     seller.isListing = body.isListing;
  //     await this.sellersRepository.save(seller);
  //
  //     const categoriesIDs = body.categories;
  //
  //     for (const categoryID of categoriesIDs)
  //     {
  //     const category = await this.CategoryRepository.getCategoryById(categoryID);
  //     if (!category)
  //     {
  //       throw new NotFoundException('Category does not exist');
  //     }
  //
  //
  //     const sellerCategory = await this.sellerCategoryRepository.create();
  //     sellerCategory.seller = seller;
  //     sellerCategory.category = category;
  //     await this.sellerCategoryRepository.save(sellerCategory);
  //     }
  //
  //   return {
  //     message: 'successfully created',
  //
  //   };
  // }


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


    //  async getSellerById(sellerId: string)
    //  {
    //    const seller = await this.SellerRepository.getSellerById(sellerId);
    //    console.log("here" ,seller)
    //
    //    if (!seller)
    //    {
    //      return { message: "Seller with the given ID not found" };
    //    }
    //
    //      return {
    //        record: seller
    //    };
    //
    // }
    //
    //
    //
    //   //update seller
    //   async updateSeller(updateSeller:updateSellerInterface)
    //   {
    //     const update= await this.SellerRepository.updateSeller(updateSeller.sellerId ,updateSeller.sellerName);
    //     if (!update)
    //     {
    //       return { message: "seller with given ID not found" };
    //     }
    //
    //     return{
    //        message: ' seller record updated successfully',
    //        record: update
    //     };
    // }
    //
    //
    //
    //   // delete seller
    //   async deleteSeller(deleteSeller:deleteSellerInterface)
    //   {
    //      const Delete= await this.SellerRepository.deleteSeller(deleteSeller.sellerId)
    //      if(!Delete)
    //      {
    //        return { message: "seller with given ID not found" };
    //      }
    //
    //      return {
    //        message: 'seller  deleted successfully',
    //     };
    // }
    //


}

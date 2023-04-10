import {
  BadRequestException, Body,
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException
} from "@nestjs/common";
import { seller } from "./schemas/seller.schema";
import {CategoryRepository} from "../categories/category.repository";
import {sellerRepository} from "./seller.repository";
import addSellerInterface from "./interfaces/add-seller.interface";
import {reviewRepository} from "../review/respositories/review.respository";
import {createClicksTypesDto} from "../review/dto/create-click-types.dto";
import { review } from "../review/schemas/submit-review.schema";
import updateCategoryInterface from "../categories/interfaces/update-category.interface";
import updateSellerInterface from "./interfaces/update-seller.interface";
import createSellerInterface from "./interfaces/create-seller.interface";
import {clicksTitlesRepository} from "../review/respositories/clicksTitles.repository";


@Injectable()
export class SellerService {
  constructor(
      private readonly CategoryRepository:CategoryRepository,
      private readonly SellerRepository:sellerRepository,
      private readonly ReviewRepository:reviewRepository,
      private readonly clicksTitleRepository:clicksTitlesRepository
    ) {}



    // create seller  (hidden)
    //  async createseller(body: createSellerInterface): Promise<{ record: seller }>
    //  {
    //    const sellerUrl = await this.SellerRepository.getSellerUrl(body.sellerUrl)
    //    if (sellerUrl)
    //    {
    //     throw new ConflictException('Seller Url already exists');
    //    }
    //
    //    const seller = await this.SellerRepository.createSeller(body);
    //    seller.categories = [];
    //    const categoriesIDs = body.categories;
    //    for (const categoryID of categoriesIDs)
    //    {
    //      const category = await this.CategoryRepository.getCategoryById(categoryID);
    //      if (!category)
    //      {
    //        throw new NotFoundException('Category does not exist');
    //      }
    //      seller.categories.push(category);
    //    }
    //
    //     await this.SellerRepository.sellerCategories(seller);
    //     return { record: seller };
    // }




      // get seller by ID (associated categories)
       async getSellerById(id:string ) :Promise<{record:seller}>
       {
         const seller = await this.SellerRepository.getSellerById(id)
          if(!seller)
          {
            throw new  NotFoundException('seller with  the given ID not found');
          }

           return { record: seller };

       }



        // get all sellers
       async getAllSellers( ):Promise<{records:seller[]}>
       {
          const sellers = await this.SellerRepository.getAllSellers()
          if(!sellers)
          {
            throw new  NotFoundException('sellers do not exist');

          }

            return { records: sellers};
       }




     // add seller
    async addSeller(body:addSellerInterface):Promise<{seller: seller, review: review}>
     {

        const sellerUrl = await this.SellerRepository.getSellerUrl(body.sellerUrl)
        if (sellerUrl)
        {
            throw new ConflictException('Seller Url already exists');
        }

         const seller = await this.SellerRepository.createSeller(body);
         seller.categories = [];


         const categoriesIDs = body.categories;
         for (const categoryID of categoriesIDs)
         {
           const category = await this.CategoryRepository.getCategoryById(categoryID);
            if (!category)
            {
               throw new NotFoundException('Category does not exist');
            }
             seller.categories.push(category);
         }


         await this.SellerRepository.sellerCategories(seller);

         const typeResult = await this.clicksTitleRepository.findByTitle(body.titleId);
         if(!typeResult)
         {
            throw new  NotFoundException('Balloon title not exist');
         }

        const reviewBody = {
          titleId: body.titleId,
          sellerId: seller.id,
          message: body.message,
          slug:body.slug

       };

        const review= await this.ReviewRepository.submitReview(reviewBody);
        return { seller, review };
   }




      // update seller
      async updateSeller(updateSeller:updateSellerInterface):Promise<{ message: string, update:updateSellerInterface}>
      {

          const update = await this.SellerRepository.updateSeller(updateSeller.id, updateSeller.sellerName,updateSeller.sellerUrl);
          if (!update)
          {
             throw new NotFoundException('seller not found');
          }

              return { message: "seller updated successfully", update};
     }





     // delete seller
     async deleteSeller(id:string):Promise<{message: string, deletedSeller: seller}>
     {

         const deletedSeller = await this.SellerRepository.deleteSeller(id);
         if (!deletedSeller)
         {
            throw new NotFoundException('seller not found');
         }


         return { message: "seller deleted successfully", deletedSeller };
     }




}

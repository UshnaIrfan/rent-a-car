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
import {clicksTypesRepository} from "../review/respositories/clicksTypes.repository";
import { review } from "../review/schemas/submit-review.schema";

@Injectable()
export class SellerService {
  constructor(
      private readonly CategoryRepository:CategoryRepository,
      private readonly SellerRepository:sellerRepository,
      private readonly ReviewRepository:reviewRepository,
      private readonly clicksTypesRepository:clicksTypesRepository
    ) {}



    // create seller  (hidden)
    //  async createseller(body: createSellerInterface): Promise<{ record: seller }>
    //  {
    //    const sellerName = await this.SellerRepository.getSellerName(body.sellerName)
    //    if (sellerName)
    //    {
    //     throw new ConflictException('Seller name already exists');
    //    }
    //
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

        const typeResult = await this.clicksTypesRepository.getByTypeId(body.balloonId);
        if(!typeResult)
        {
           throw new  NotFoundException('Balloon not exist');
        }

        const reviewBody = {
          balloonId: body.balloonId,
          sellerId: seller.id,
          message: body.message
       };

        const review= await this.ReviewRepository.submitReview(reviewBody);
        return { seller, review };
   }


}

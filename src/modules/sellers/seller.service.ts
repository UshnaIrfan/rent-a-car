import {
  BadRequestException, Body, CACHE_MANAGER,
  ConflictException, Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException
} from "@nestjs/common";
import { seller } from "./schemas/seller.schema";
import {CategoryRepository} from "../categories/category.repository";
import {sellerRepository} from "./seller.repository";
import addSellerInterface from "./interfaces/add-seller.interface";
import {reviewRepository} from "../review/respositories/review.respository";
import { review } from "../review/schemas/submit-review.schema";
import updateSellerInterface from "./interfaces/update-seller.interface";
import createSellerInterface from "./interfaces/create-seller.interface";
import {clicksTitlesRepository} from "../review/respositories/clicksTitles.repository";
import { jwtConstants } from "../auth/constants/constants";
import { JwtService } from '@nestjs/jwt';
import {UsersRepository} from "../users/users.repository";
import { Cache } from 'cache-manager';
import submitReviewInterface from "../review/interfaces/submit-review.interface";
import createContactUsInterface from "../contact-us/interfaces/create-contact-us.interface";


@Injectable()
export class SellerService {
  constructor(
      private readonly CategoryRepository:CategoryRepository,
      private readonly SellerRepository:sellerRepository,
      private readonly ReviewRepository:reviewRepository,
      private readonly clicksTitleRepository:clicksTitlesRepository,
      private readonly usersRepository:UsersRepository,
      private jwtService: JwtService,
      @Inject(CACHE_MANAGER) private cacheManager: Cache
    ) {}



    // create seller
     async createseller(body: createSellerInterface,accessToken: string): Promise<{ record: seller }>
     {

        const cachedToken = await this.cacheManager.get(accessToken);
        if (!cachedToken)
        {
           throw new UnauthorizedException('Token expired');
        }


       const decoded = await this.jwtService.verify(accessToken, { secret:jwtConstants.secret, });

       const user = await this.usersRepository.findUserByID(decoded.id)
       if(!user)
       {
         throw new  NotFoundException('invalid user')
       }
       const Url = await this.SellerRepository.getSellerUrl(body.sellerUrl)
       if (Url)
       {
        throw new ConflictException('Seller Url already exists');
       }

       const data: createSellerInterface & { userId: string } = {
         ...body,
         userId: decoded.id,
       };

       const seller = await this.SellerRepository.createSeller(data);
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
        return { record: seller };
    }





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
     async addSeller(body:addSellerInterface,accessToken: string):Promise<{seller: seller, review: review}>
     {

          const cachedToken = await this.cacheManager.get(accessToken);
          if (!cachedToken)
          {
            throw new UnauthorizedException('Token expired');
          }


          const decoded = await this.jwtService.verify(accessToken, { secret:jwtConstants.secret, });
          const user = await this.usersRepository.findUserByID(decoded.id)
          if(!user)
          {
            throw new  NotFoundException('invalid user')
          }


         const sellerUrl = await this.SellerRepository.getSellerUrl(body.sellerUrl)
         if (sellerUrl)
         {
            throw new ConflictException('Seller Url already exists');
         }

         const data: addSellerInterface & { userId: string } = {
            ...body,
           userId: decoded.id,
          };


         const seller = await this.SellerRepository.createSeller(data);
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
            throw new  NotFoundException('Balloon title not found');
         }

         const typeSlug = await this.clicksTitleRepository.findBySlug(body.slug);
         if(!typeSlug)
         {
             throw new  NotFoundException('slug not found');
         }

        const reviewBody = {
           titleId: body.titleId,
           sellerId: seller.id,
           message: body.message,
           slug:body.slug,
           userId: decoded.id
       };

        const review= await this.ReviewRepository.submitReview(reviewBody);
        return { seller, review };
   }





      // update seller
      async updateSeller(updateSeller:updateSellerInterface,accessToken: string):Promise<{ message: string, update:updateSellerInterface}>
      {
          const cachedToken = await this.cacheManager.get(accessToken);
          if (!cachedToken)
          {
             throw new UnauthorizedException('Token expired');
          }

         const update = await this.SellerRepository.updateSeller(updateSeller.id, updateSeller.sellerName,updateSeller.sellerUrl);
          if (!update)
          {
             throw new NotFoundException('seller not found');
          }

              return { message: "seller updated successfully", update};
     }





     // delete seller
     async deleteSeller(id:string,accessToken: string):Promise<{message: string, deletedSeller: seller}>
     {

          const cachedToken = await this.cacheManager.get(accessToken);
          if (!cachedToken)
          {
             throw new UnauthorizedException('Token expired');
          }

         const deletedSeller = await this.SellerRepository.deleteSeller(id);
         if (!deletedSeller)
         {
            throw new NotFoundException('seller not found');
         }


         return { message: "seller deleted successfully", deletedSeller };
     }




}

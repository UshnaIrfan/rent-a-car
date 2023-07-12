import {
  CACHE_MANAGER,
  ConflictException, Inject,
  Injectable,
  NotFoundException, UnauthorizedException
} from "@nestjs/common";
import { seller } from "./schemas/seller.schema";
import {CategoryRepository} from "../categories/category.repository";
import {sellerRepository} from "./seller.repository";
import addSellerInterface from "./interfaces/add-seller.interface";
import {reviewRepository} from "../review/respositories/review.respository";
import updateSellerInterface from "./interfaces/update-seller.interface";
import createSellerInterface from "./interfaces/create-seller.interface";
import {clicksTitlesRepository} from "../review/respositories/clicksTitles.repository";
import { jwtConstants } from "../auth/constants/constants";
import { JwtService } from "@nestjs/jwt";
import {UsersRepository} from "../users/users.repository";
import { Cache } from "cache-manager";
import paginationSellerInterface from "./interfaces/pagination-seller.interface";
import adminUpdateSellerInterface from "./interfaces/admin-update.seller.interface";


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



         // ADMIN APIS
         // create seller
         async createseller(body: createSellerInterface):Promise<{record:seller}>
         {

            const sellerName = await this.SellerRepository.getSellerName(body.sellerUrl)
            if (sellerName)
            {
               throw new ConflictException('This seller is already on our list!');

            }
            const Url = await this.SellerRepository.getSellerUrl(body.sellerUrl)
            if (Url)
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
           return { record: seller };
       }




        // all seller get
        async getAllAdminSellers(pageNumber: number):Promise<paginationSellerInterface >
        {
            const pageSize = 10;
            const skip = (pageNumber - 1) * pageSize;
            const [result, totalCount] = await this.SellerRepository.findAndCount(skip, pageSize);
            const totalPages = Math.ceil(totalCount / pageSize);
            if (result.length === 0)
            {
               throw new NotFoundException('No records found');
            }

            return {
              records: result,
              totalRecords: totalCount,
              totalPages,
              currentPage: pageNumber,
         };
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




        //admin update seller status
        async  adminUpdateSeller (adminUpdateSellerInterface:adminUpdateSellerInterface):Promise<{ update: updateSellerInterface; message: string }>
        {
             const update = await this.SellerRepository.adminUpdateSeller(adminUpdateSellerInterface.sellerId, adminUpdateSellerInterface.approvedByAdmin,adminUpdateSellerInterface.isListing);
             if (!update)
             {
                 throw new NotFoundException('seller not found');
             }
             return { message: "seller updated successfully", update};
       }



         // seller by name search
       async search(pageNumber: number,pageSize?:number, query?: string, categoryId?: string,type?: string,country?: string,city?: string,state?: string,address?: string)
       {

           const skip = (pageNumber - 1) * pageSize;
           const [result, totalCount] = await this.SellerRepository.search(skip,pageSize,query,categoryId,type,country,city,state,address);
           const totalPages = Math.ceil(totalCount / pageSize);
           if (result.length === 0)
           {
              throw new NotFoundException('No records found');
           }
           return {
              records: result,
              totalRecords: totalCount,
              totalPages,
              currentPage: pageNumber,
         };
      }




       // get all sellers
         async getAllSeller( ):Promise<{records:seller[]}>
         {
              const sellers = await this.SellerRepository.getAllSeller()
              if(!sellers)
              {
                throw new  NotFoundException('sellers do not exist');
              }
             return { records: sellers};
        }




         // FRONTEND APIS
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

         // get all seller with type
        // async getAllSellers( type?: string):Promise<{records:seller[]}>
        // {
        //     const sellers = await this.SellerRepository.getAllSellers(type)
        //     if(!sellers)
        //     {
        //       throw new  NotFoundException('sellers do not exist');
        //     }
        //     return { records: sellers};
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




       // add seller
      async addSeller(body:addSellerInterface,accessToken: string):Promise<any>
      {
          const decoded = await this.jwtService.verify(accessToken, { secret:jwtConstants.secret, });
          const user = await this.usersRepository.findUserByID(decoded.id)
          if(!user)
          {
             throw new  NotFoundException('invalid user')
          }
          const cachedToken = await this.cacheManager.get(accessToken);
          if(!cachedToken)
          {
             throw new UnauthorizedException('token expired');
          }

          const sellerName = await this.SellerRepository.getSellerName(body.sellerName)
          if (sellerName)
          {
            throw new ConflictException('This seller is already on our list!');
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
          if(body.titleId==null)
          {
            return { seller};
          }
          const typeResult = await this.clicksTitleRepository.findByTitle(body.titleId);
          if(!typeResult)
          {
             throw new  NotFoundException('Balloon title not found');
          }
         const previousReview = await this.ReviewRepository.findReviewByUserAndSeller(decoded.id,seller.id);
         if (previousReview)
         {
            throw new ConflictException('You have already submitted a review for this seller');
         }
         const reviewBody = {
              titleId: body.titleId,
              sellerId: seller.id,
              message: body.message,
              titleSlug:typeResult.slug,
              userId: decoded.id,
              approvedByAdmin:body.approvedbyAdmin,
              bestWriter:body.bestWriter,
       };

         const review= await this.ReviewRepository.submitReview(reviewBody);
         return { seller, review };
   }


        // unique seller show
        async getUniqueSeller(seller_Id: string)
        {
              const result = await this.SellerRepository.getUniqueSeller( seller_Id);
              return  result
        }

}

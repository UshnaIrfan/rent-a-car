import {
  BadRequestException, CACHE_MANAGER,
  ConflictException, Inject,
  Injectable,
  NotFoundException
} from "@nestjs/common";
import { Cache } from "cache-manager";
import {CategoryRepository} from "./category.repository";
import createCategoryInterface from "./interfaces/create-category.interface";
import { category } from "./schemas/category.schema";
import updateCategoryInterface from "./interfaces/update-category.interface";
import {UsersRepository} from "../users/users.repository";
import { JwtService } from "@nestjs/jwt";
import {ReviewService} from "../review/review.service";
import {reviewRepository} from "../review/respositories/review.respository";
import {clicksTitlesRepository} from "../review/respositories/clicksTitles.repository";
import paginationCategoryInterface from "./interfaces/pagination-category.interface";
import {likeDislikeRepository} from "../review/respositories/like-dislike.repository";
import adminUpdateCategoryInterface from "./interfaces/admin-update.category.interface";

@Injectable()
export class CategoriesService {
  constructor(
    private readonly categoryRepository:CategoryRepository,
    private readonly usersRepository:UsersRepository,
    private readonly reviewRepository:reviewRepository,
    private readonly clickTitlesRepository:clicksTitlesRepository,
    private readonly likeDislikeRepository:likeDislikeRepository,
    private jwtService: JwtService,
    private reviewService:ReviewService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}



      //ADMIN APIS
      // create category
      async createCategory(createCategory:createCategoryInterface):Promise<category>
      {

          const  categoryName= await this.categoryRepository.getCategoryByName(createCategory.categoryName);
          if (categoryName)
          {
              throw new ConflictException(' category already exists');
          }

         try
         {
            const category = await this.categoryRepository.createCategory(createCategory);
            return category;
         }
         catch (e)
         {
            throw new BadRequestException('Category creation failed');
         }

     }




      //get all categories and search by name(pagination)
      async getAllAdminCategories(pageNumber: number,pageSize?:number,categoryName?: string):Promise<paginationCategoryInterface>
      {
          const skip = (pageNumber - 1) * pageSize;
          const [result, totalCount] = await this.categoryRepository.findAndCount(skip, pageSize,categoryName);
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



      // update category
      async updateCategory(updateCategory:updateCategoryInterface):Promise<{ message: string, updateCategory: updateCategoryInterface }>
      {

         const update = await this.categoryRepository.updateCategory(updateCategory.id, updateCategory.categoryName);
         if (!update)
         {
             throw new NotFoundException('Category not exist');
         }

          return { message: "Category updated successfully", updateCategory };
      }




      // delete category
      async deleteCategory(id:string): Promise<{ message: string, deletedCategory: category }>
      {

         const deletedCategory = await this.categoryRepository.deleteCategory(id);
         if (!deletedCategory)
         {
           throw new NotFoundException('Category not exist');
         }

          return { message: "Category deleted successfully", deletedCategory };
     }



       // admin update category status
       async adminUpdateCategory(adminUpdateCategoryInterface:adminUpdateCategoryInterface):Promise<{ updateAdmin: category; message: string }>
       {
           const updateAdmin = await this.categoryRepository.adminUpdateCategory(adminUpdateCategoryInterface.categoryId,adminUpdateCategoryInterface.approvedByAdmin);
           if (!updateAdmin)
           {
               throw new NotFoundException('Category not exist');
           }
              return { message: "Category status updated successfully",updateAdmin };
      }




       //FRONTEND APIS
       // get all categories
       async getAllCategories() :Promise<{ records: category[] }>
       {
           const categories = await this.categoryRepository.getAllCategories()
           if (!categories)
           {
              throw new  NotFoundException('Categories not exist');
           }
           return { records: categories};
       }




        // get category by id
       async getCategoryById(id: string):Promise<{ records: category }>
       {
           const category = await this.categoryRepository.getCategoryId(id)
           if (!category)
           {
            throw new  NotFoundException('invalid category id');
           }
           return { records: category};
       }




       //  common sellers
       async get(category_Id: string, seller_Id: string)
       {
         const result = await this.categoryRepository.getCommonSellers(category_Id, seller_Id);
         return {records: result.length > 0 ? result : null };
      }



        //  latest positive review
       async getReviewsPositive(categoryId: string)
       {
             var review_exit= false;
             const category = await this.categoryRepository.getCategoryId(categoryId);
             if (!category)
             {
                 throw new NotFoundException('Category not exist');
             }

             const sellerIds = [];
             for (const seller of category.sellers)
             {
                   sellerIds.push(seller.id);
             }
            const latestPositiveReview = await this.reviewRepository.getLatestReviewBySellerId(sellerIds);
            if (!latestPositiveReview)
            {
               return {
                 category: {
                   id: category.id,
                   categoryName: category.categoryName,
                   approvedByAdmin: category.approvedByAdmin,
                 },
                 'review-exit':review_exit,
                 'to-review': latestPositiveReview,
               };
           }

           if (latestPositiveReview)
           {
               review_exit=true
               return {
                 category: {
                   id: category.id,
                   categoryName: category.categoryName,
                   approvedByAdmin: category.approvedByAdmin,
                 },
                 'review-exit':review_exit,
                 'to-review': latestPositiveReview
               };
           }
    }

}

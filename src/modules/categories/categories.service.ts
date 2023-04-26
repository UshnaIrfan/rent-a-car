import {
  BadRequestException, CACHE_MANAGER,
  ConflictException, Inject,
  Injectable, NotAcceptableException,
  NotFoundException, UnauthorizedException
} from "@nestjs/common";
import { Cache } from 'cache-manager';
import {CategoryRepository} from "./category.repository";
import createCategoryInterface from "./interfaces/create-category.interface";
import { category } from "./schemas/category.schema";
import updateCategoryInterface from "./interfaces/update-category.interface";
import {UsersRepository} from "../users/users.repository";
import { JwtService } from "@nestjs/jwt";
import { seller } from "../sellers/schemas/seller.schema";
import { jwtConstants } from "../auth/constants/constants";
import {reviewRepository} from "../review/respositories/review.respository";
import {clicksTitlesRepository} from "../review/respositories/clicksTitles.repository";

@Injectable()
export class CategoriesService {
  constructor(
    private readonly categoryRepository:CategoryRepository,
    private readonly usersRepository:UsersRepository,
    private readonly reviewRepository:reviewRepository,
    private readonly clickTitlesRepository:clicksTitlesRepository,
    private jwtService: JwtService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}


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




     //  common sellers
     async get(id: string):Promise<{ records: seller[] | null }>
     {
       const category = await this.categoryRepository.getCategoryId(id);
       if (!category)
       {
         throw new NotFoundException('Category not exist');
       }

       const commonSellers = await this.categoryRepository.getCommonSellers(id, category.sellers);
       return { records: commonSellers.length > 0 ? commonSellers : null };

     }




      async getReviewsPositive(categoryId: string)
      {
         const category = await this.categoryRepository.getCategoryId(categoryId);
         if (!category)
         {
           throw new NotFoundException('Category not exist');
         }

         let latestPositiveReview = null;

        for (const seller of category.sellers)
        {
          const review = await this.reviewRepository.getLatestPositiveReviewBySellerId(seller.id);
          if (review && (!latestPositiveReview || review.createdAt > latestPositiveReview.createdAt))
          {
            const matchingSlugTitle = await this.clickTitlesRepository.findBySlug(review.titleSlug);
            if (matchingSlugTitle)
            {
               const title = await this.clickTitlesRepository.findByTitle(review.titleId);
               if (title && title.type === 'to-love' && matchingSlugTitle.type === 'to-love' && review.message && review.message.trim() !== '')
               {
                  latestPositiveReview = review;
               }
              else
              {
                  throw new NotFoundException(`Title not exist with id: ${review.titleId}`);
              }
           }
           else
           {
             throw new NotFoundException(`Title not found with slug: ${review.titleSlug}`);
           }
      }
    }
     return {
           'to-love': latestPositiveReview ? [latestPositiveReview] : [],
      };
  }






}

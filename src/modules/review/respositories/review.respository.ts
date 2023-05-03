import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { In, IsNull, Like, Not, Raw, Repository } from "typeorm";
import {review} from "../schemas/submit-review.schema";
import {submitReviewDto} from "../dto/submit-review.dto";
import {clicksTitlesRepository} from "./clicksTitles.repository";
import { seller } from "../../sellers/schemas/seller.schema";
import { category } from "../../categories/schemas/category.schema";
import {CategoryRepository} from "../../categories/category.repository";


@Injectable()
export class reviewRepository{
  constructor(@InjectRepository(review) private reviewModel: Repository<review>,
              private  readonly  titleRepository:clicksTitlesRepository,
              private  readonly  categoryRepository:CategoryRepository
  ){}



       //submit review
       async submitReview(createReview:submitReviewDto):Promise<review| null>
       {
            return this.reviewModel.save(createReview);
       }





       // get  reviews (pagination)
       async findAndCount(skip: number, take: number): Promise<[review[], number]>
       {
         const [result, totalCount] = await this.reviewModel.findAndCount({
          skip,
          take,
          });
         return [result, totalCount];
       }




       async reviewBySellerIdALL(sellerId:string):Promise<review[]| null>
       {
          return this.reviewModel.find({
          where: { sellerId },
         });
       }


        //search by seller id
        async reviewBySellerId(sellerId:string):Promise<review| null>
        {
          return this.reviewModel.findOne({ where: { sellerId }});
        }


 //search by user id
  async reviewByUserId(userId:string):Promise<review| null>
  {
    return this.reviewModel.findOne({ where: { userId}});
  }


       //update review
        async updateReview(titleId: string, message: string,  id: string): Promise<review | null>
        {
           const review = await this.reviewModel.findOne({ where: { id } });
           if (!review)
           {
              throw new NotFoundException('review id not found');
           }

          if (titleId)
          {
             const result = await this.titleRepository.findByTitle(titleId);
             if (!result)
             {
                throw new NotFoundException('Title id not found ');
             }
             review.titleId = titleId;
             review.titleSlug = result.slug;
          }

         if (message)
         {
            review.message = message;
         }

          return this.reviewModel.save(review);
   }




        async reviewById(id:string):Promise<review| null>
        {
          return this.reviewModel.findOne({ where: {id }});
        }




       async findReviewByUserAndSeller(userId: string, sellerId: string): Promise<review>
       {
          const review = await this.reviewModel.findOne({
          where: { userId, sellerId}});
          return review;
       }






    // latest positive review
    //  async getLatestReviewBySellerId(sellerId: string): Promise<review |null>
    //  {
    //     const review = await this.reviewModel.findOne({
    //     where: [{ sellerId: sellerId }, { message: Not(IsNull()) }],
    //     order: { createdAt: 'DESC' }
    //   });
    //    console.log(review);
    //
    //   return review;
    // }

      async getLatestReviewBySellerId(sellerId: string): Promise<review | null>
      {
             const positiveReviews = await this.reviewModel.findOne(
           {
                where: [{ sellerId: sellerId,  message: Not(IsNull())},
                   {titleId: In([
                        "44bf96b2-5476-47f5-8ff9-7336d53156a8",
                        "55ed7b45-0a6b-4c4b-92ff-ad78be13e31a",
                        "df368bbf-9155-4d36-932e-c94d34e7154a"
                   ])}],
                 order: { createdAt: 'DESC' }
                 });

                console.log(positiveReviews)
                return positiveReviews;
        }







        //ADMIN APIS


  async search(skip: number, take: number, query?: string, sellerId?: string, userId?: string, type?: string,categoryId?:string): Promise<any>
  {
    let whereConditions = {};


    if (categoryId) {
      const categoryID = await this.categoryRepository.getCategoryId(categoryId);
      if (!categoryID) {
        throw new NotFoundException('category not found.');
      }
    }



    if (categoryId && sellerId) {
      const categoryID = await this.categoryRepository.getCategoryId(categoryId);
      if (!categoryID) {
        throw new NotFoundException('Category not found.');
      }

      const seller = categoryID.sellers.find(seller => seller.id === sellerId);
      if (!seller) {
        throw new NotFoundException('Seller not found in the given category.');
      }

      console.log(seller)
    }





    else if (sellerId && userId && query && type) {
      const user = await this.reviewByUserId(userId);
      if (!user) {
        throw new NotFoundException('User not found.');
      }
      const seller = await this.reviewBySellerId(sellerId);
      if (!seller) {
        throw new NotFoundException('Seller not found.');
      }
      if (type === 'to-love') {
        whereConditions = {
          titleSlug: Like(`to-love%`),
          message: Like(`%${query}%`),
          userId: userId,
          sellerId: sellerId,
        };
      } else if (type === 'to-air') {
        whereConditions = {
          titleSlug: Like(`to-air%`),
          message: Like(`%${query}%`),
          userId: userId,
          sellerId: sellerId,
        };
      }
    }



   else if (query && userId && type) {
      const user = await this.reviewByUserId(userId);
      if (!user) {
        throw new NotFoundException('User not found.');
      }

      if (type === 'to-love') {
        whereConditions = {
          titleSlug: Like(`to-love%`),
          message: Like(`%${query}%`),
          userId: userId,
        };
      } else if (type === 'to-air') {
        whereConditions = {
          titleSlug: Like(`to-air%`),
          message: Like(`%${query}%`),
          userId: userId,
        };
      }
    }





    else if (query && sellerId && type) {
      const seller = await this.reviewBySellerId(sellerId);
      if (!seller) {
        throw new NotFoundException('Seller not found.');
      }
      if (type === 'to-love') {
        whereConditions = {
          titleSlug: Like(`to-love%`),
          message: Like(`%${query}%`),
          sellerId: sellerId,
        };
      } else if (type === 'to-air') {
        whereConditions = {
          titleSlug: Like(`to-air%`),
          message: Like(`%${query}%`),
          sellerId: sellerId,
        };
      }
    }





    else if (sellerId && userId && type) {
      const user = await this.reviewByUserId(userId);
      if (!user) {
        throw new NotFoundException('User not found.');
      }
      const seller = await this.reviewBySellerId(sellerId);
      if (!seller) {
        throw new NotFoundException('Seller not found.');
      }
      if (type === 'to-love') {
        whereConditions = {
          titleSlug: Like(`to-love%`),
          sellerId: sellerId,
          userId: userId,
        };
      } else if (type === 'to-air') {
        whereConditions = {
          titleSlug: Like(`to-air%`),
          sellerId: sellerId,
          userId: userId,
        };
      }
    }





   else if (sellerId && userId && query) {
      const user = await this.reviewByUserId(userId);
      if (!user) {
        throw new NotFoundException('User not found.');
      }
      const seller = await this.reviewBySellerId(sellerId);
      if (!seller) {
        throw new NotFoundException('Seller not found.');
      }
      whereConditions = {
        sellerId: sellerId,
        userId: userId,
        message: Like(`%${query}%`),
      };
    }







    else if (sellerId && userId) {
      const user = await this.reviewByUserId(userId);
      if (!user) {
        throw new NotFoundException('User not found.');
      }
      const seller = await this.reviewBySellerId(sellerId);
      if (!seller) {
        throw new NotFoundException('Seller not found.');
      }
      whereConditions = {
        sellerId: sellerId,
        userId: userId,
      };
    }






    else if (query && userId) {
      const user = await this.reviewByUserId(userId);
      if (!user) {
        throw new NotFoundException('User not found.');
      }
      whereConditions = {
        message: Like(`%${query}%`),
        userId: userId,
      };
    }


    else if (userId && type) {
      const user = await this.reviewByUserId(userId);
      if (!user) {
        throw new NotFoundException('User not found.');
      }
      if (type === 'to-love') {
        whereConditions = {
          titleSlug: Like(`to-love%`),
          userId: userId,
        };
      } else if (type === 'to-air') {
        whereConditions = {
          titleSlug: Like(`to-air%`),
          userId: userId,
        };
      }
    }



    else if (sellerId && type) {
      const seller = await this.reviewBySellerId(sellerId);
      if (!seller) {
        throw new NotFoundException('seller not found.');
      }
      if (type === 'to-love') {
        whereConditions = {
          titleSlug: Like(`to-love%`),
          sellerId: sellerId,
        };
      } else if (type === 'to-air') {
        whereConditions = {
          titleSlug: Like(`to-air%`),
          seller: sellerId,
        };
      }
    }


    else if (query && type) {
      if (type === 'to-love') {
        whereConditions = {
          titleSlug: Like(`to-love%`),
          message: Like(`%${query}%`),
        };
      } else if (type === 'to-air') {
        whereConditions = {
          titleSlug: Like(`to-air%`),
          message: Like(`%${query}%`),
        };
      }
    }







    else if (query && sellerId) {
      const seller = await this.reviewBySellerId(sellerId);
      if (!seller) {
        throw new NotFoundException('Seller not found.');
      }
      whereConditions = {
        message: Like(`%${query}%`),
        sellerId: sellerId,
      };
    }


    else if (userId) {
      const user = await this.reviewByUserId(userId);
      if (!user) {
        throw new NotFoundException('User not found.');
      }
      whereConditions = {
        userId: userId,
      };
    }



    else if (sellerId) {
      const seller = await this.reviewBySellerId(sellerId);
      if (!seller) {
        throw new NotFoundException('Seller not found.');
      }
      whereConditions = {
        sellerId: sellerId,
      };
    }


    else if (query) {
      whereConditions = {
        message: Like(`%${query}%`),
      };
    }



   else  if (type) {
      if (type === 'to-love') {
        whereConditions['titleSlug'] = Like(`to-love%`);
      } else if (type === 'to-air') {
        whereConditions['titleSlug'] = Like(`to-air%`);
      }
    }



    const [result, totalCount] = await this.reviewModel.findAndCount({
      where: whereConditions,
      skip,
      take,
    });
    if (!result.length) {
      throw new NotFoundException('No reviews were found matching the criteria.');
    }


    return [result, totalCount];
  }



}



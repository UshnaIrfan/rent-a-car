import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { In, IsNull, Like, Not, Raw, Repository } from "typeorm";
import {review} from "../schemas/submit-review.schema";
import {submitReviewDto} from "../dto/submit-review.dto";
import {clicksTitlesRepository} from "./clicksTitles.repository";
import { seller } from "../../sellers/schemas/seller.schema";
import { category } from "../../categories/schemas/category.schema";
import {CategoryRepository} from "../../categories/category.repository";
import { query } from "express";


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
  //   async search(skip: number, take: number, reviewId?: string, sellerId?: string, userId?: string, message?: string ,type?:string,categoryId ?:string): Promise<any>
  //   {
  //
  //       let whereConditions = {
  //
  //             id:reviewId ?? undefined,
  //             userId: userId ?? undefined,
  //             sellerId: sellerId ?? undefined,
  //             message: message ? Like(`%${message}%`) : undefined,
  //             titleSlug: type === 'to-love' || type === 'to-air' ? Like(`${type}%`) : undefined,
  //             categoryId:categoryId ?? undefined,
  //
  //       };
  //
  //
  //       const [result, totalCount] = await this.reviewModel.findAndCount({
  //       where: { ...whereConditions },
  //         skip,
  //         take,
  //
  //      });
  //
  //      if (!result.length)
  //      {
  //           throw new NotFoundException('No reviews were found matching the criteria.');
  //      }
  //
  //          return [result, totalCount];
  // }




      async search(skip: number, take: number,  sellerId?: string, userId?: string, message?: string ,type?:string,categoryId ?:string): Promise<any>
      {

        let whereConditions = {

            userId: userId ?? undefined,
            sellerId: sellerId ?? undefined,
            message: message ? Like(`%${message}%`) : undefined,
            titleSlug: type === 'to-love' || type === 'to-air' ? Like(`${type}%`) : undefined,
            // categoryId:categoryId ?? undefined,
        };


          let sellerIds=[];
          if (categoryId)
          {
            const category = await this.categoryRepository.GetCategoryId(categoryId);
            sellerIds = category.sellers.map(seller => seller.id);
            console.log(sellerIds)

          }



        const [result, totalCount] = await this.reviewModel.findAndCount({
         where: { ...whereConditions, sellerId: In(sellerIds) },
         // where: { ...whereConditions },
         skip,
         take,
        });

        if (!result.length)
        {
            throw new NotFoundException('No reviews were found matching the criteria.');
        }

         return [result, totalCount];
   }





}



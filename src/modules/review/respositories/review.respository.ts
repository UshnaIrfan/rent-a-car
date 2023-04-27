import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Like, Not, Repository } from "typeorm";
import {review} from "../schemas/submit-review.schema";
import {submitReviewDto} from "../dto/submit-review.dto";
import {clicksTitlesRepository} from "./clicksTitles.repository";
import { seller } from "../../sellers/schemas/seller.schema";
import { clicksTitle } from "../schemas/create-clicks-titles.schema";
import { category } from "../../categories/schemas/category.schema";

@Injectable()
export class reviewRepository{
  constructor(@InjectRepository(review) private reviewModel: Repository<review>,
              private  readonly  titleRepository:clicksTitlesRepository
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




       async reviewBySellerId(sellerId:string):Promise<review| null>
       {
          return this.reviewModel.findOne({ where: { sellerId }});
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
     async getLatestPositiveReviewBySellerId(sellerId: string): Promise<review | null>
     {
        const latestReview = await this.reviewModel.findOne({
        where: { sellerId, message: Not(IsNull())},
        order: {
        createdAt: 'DESC'
       }, });

      return latestReview || null;
   }





}



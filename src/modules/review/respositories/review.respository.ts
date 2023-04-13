import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import {  Repository } from "typeorm";
import {review} from "../schemas/submit-review.schema";
import {submitReviewDto} from "../dto/submit-review.dto";
import { seller } from "../../sellers/schemas/seller.schema";
import { clicksTitle } from "../schemas/create-clicks-titles.schema";
import { category } from "../../categories/schemas/category.schema";

@Injectable()
export class reviewRepository{
  constructor(@InjectRepository(review) private reviewModel: Repository<review>
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





      // async review():Promise<review[]|null>
      // {
      //    return this.reviewModel.find();
      // }
       async review(sellerId:string):Promise<review[]| null>
       {
         return this.reviewModel.find({
          where: { sellerId },
         });
       }




       async Review(sellerId:string):Promise<review| null>
       {
          return this.reviewModel.findOne({
          where: { sellerId },
        });
       }



       //update review
     async updateReview(sellerId :string, message:string): Promise<review | null>
     {
        const result = await this.reviewModel.findOne(
      {
           where: {sellerId },
         });

       if (!result)
       {
         throw new NotFoundException('seller id not found');
       }

        result.message = message;
        return this.reviewModel.save(result);
    }



}


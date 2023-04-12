import { Injectable} from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import {  Repository } from "typeorm";
import {review} from "../schemas/submit-review.schema";
import {submitReviewDto} from "../dto/submit-review.dto";
import { seller } from "../../sellers/schemas/seller.schema";
import { clicksTitle } from "../schemas/create-clicks-titles.schema";

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






  async Review(sellerId:string):Promise<review[]| null>
  {
    return this.reviewModel.find({
      where: { sellerId },
    });
  }
}


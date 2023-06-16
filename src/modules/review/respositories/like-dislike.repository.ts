import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {likeDislike} from "../schemas/like-dislike.schema";
import {likeDislikeReviewDto} from "../dto/like-dislike-review.dto";
import {status} from "../schemas/like-dislike.schema";
import { review } from "../schemas/submit-review.schema";


@Injectable()
export class likeDislikeRepository{
  constructor(
    @InjectRepository(likeDislike) private likeDislikeModel: Repository<likeDislike>,
  ){}


        async createLikeDislike(reqBody:likeDislikeReviewDto): Promise<likeDislike>
        {
            return this.likeDislikeModel.save(reqBody);
        }



       async getById(reviewId:string):Promise<likeDislike[]| null>
       {
          return this.likeDislikeModel.find({ where: { reviewId}, });
       }



       async getAllReviewsCountByReviewId(  reviewId: string): Promise<likeDislike[]|null>
       {
           return  await this.likeDislikeModel.find({ where: {   reviewId } });
       }



        //delete user with review with likeAndDislike
        async delete(reviewId:string) : Promise<likeDislike | undefined>
        {
            const review = await this.likeDislikeModel.findOne({ where: { id:reviewId}});
            if (!review)
            {
                 return null
            }
            return await this.likeDislikeModel.remove(review);
        }


}



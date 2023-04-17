import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {likeDislikeSchema} from "../schemas/like-dislike.schema";
import {likeDislikeReviewDto} from "../dto/like-dislike-review.dto";
import { review } from "../schemas/submit-review.schema";


@Injectable()
export class likeDislikeRepository{
  constructor(
    @InjectRepository(likeDislikeSchema) private likeDislikeModel: Repository<likeDislikeSchema>,
  ){}



     async createLikeDislike(reqBody:likeDislikeReviewDto): Promise<likeDislikeSchema>
     {
       return this.likeDislikeModel.save(reqBody);
     }




    async getById(reviewId:string):Promise<likeDislikeSchema[]| null>
    {
       return this.likeDislikeModel.find({
         where: { reviewId},
       });
    }




     async getAllReviewsCountByReviewId(  reviewId: string): Promise<likeDislikeSchema[]|null>
     {
       return  await this.likeDislikeModel.find({ where: {   reviewId } });
     }
}



import { Injectable } from "@nestjs/common";
import {likeDislike} from "../schemas/like-dislike.schema";
import {likeDislikeReviewDto} from "../dto/like-dislike-review.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";


@Injectable()
export class likeDislikeRepository{
  constructor(
    @InjectRepository(likeDislike) private likeDislikeModel: Repository<likeDislike>,
  ){}


       //like dislike submit review
        async createLikeDislike(reqBody:likeDislikeReviewDto): Promise<likeDislike>
        {
            return this.likeDislikeModel.save(reqBody);
        }



       // get like dislike by id
       async getById(reviewId:string):Promise<likeDislike[]| null>
       {
          return this.likeDislikeModel.find({ where: { reviewId}, });
       }



       // async getAllReviewsCountByReviewId(  reviewId: string): Promise<likeDislike[]|null>
       // {
       //     return  await this.likeDislikeModel.find({ where: {reviewId } });
       // }


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


        // find like dislike by id
        async findLikeDislikeByUser(userId:string):Promise<likeDislike[]| null>
        {
           return this.likeDislikeModel.find({ where: { userId}});
        }

}



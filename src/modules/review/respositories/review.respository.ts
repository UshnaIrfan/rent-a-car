import { Injectable} from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {review} from "../schemas/submit-review.schema";
import {submitReviewDto} from "../dto/submit-review.dto";

@Injectable()
export class reviewRepository{
  constructor(@InjectRepository(review) private reviewModel: Repository<review>
  ){}



     //submit review
     async submitReview(createReview:submitReviewDto): Promise<review| null>
     {
         return this.reviewModel.save(createReview);
     }



}


import { Injectable} from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {review} from "./schemas/review.schema";
import {createReviewDto} from "./dto/create-review.dto";

@Injectable()
export class reviewRepository{
  constructor(@InjectRepository(review) private reviewModel: Repository<review>
  ) {}




    async createReview(createReview:createReviewDto): Promise<review| null>
    {
      return this.reviewModel.save(createReview);
    }

}


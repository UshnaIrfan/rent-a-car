import { Injectable, UnauthorizedException } from "@nestjs/common";
import createReviewInterface from "./interfaces/create-review.interface";
import {reviewRepository} from "./review.repository";
import { MailerService } from "@nestjs-modules/mailer";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class ReviewService {
  constructor(
    private readonly reviewRepository:reviewRepository,

  ) {}




     async createReview(createReviewInterface:createReviewInterface)
     {
       const review= await this.reviewRepository.createReview(createReviewInterface);

     }

}

import { Body, Controller, Post } from "@nestjs/common";
import { ReviewService } from './review.service';
import { ApiBody, ApiTags } from "@nestjs/swagger";

import {createReviewDto} from "./dto/create-review.dto";


@ApiTags('Review')
@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}



      @ApiBody({type:createReviewDto})
      @Post('create')
      async create(
      @Body() createReview:createReviewDto)
      {
         return this.reviewService.createReview(createReview);
      }
}

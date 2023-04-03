import { Module } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';
import {review} from "./schemas/review.schema";
import { TypeOrmModule } from "@nestjs/typeorm";
import {reviewRepository} from "./review.repository";


@Module({
  imports: [TypeOrmModule.forFeature([review])],
  controllers: [ReviewController],
  providers: [ReviewService ,reviewRepository]
})
export class ReviewModule {}

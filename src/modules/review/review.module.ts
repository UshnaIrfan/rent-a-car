import { Module } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';
import {review} from "./schemas/submit-review.schema";
import { TypeOrmModule } from "@nestjs/typeorm";
import {reviewRepository} from "./respositories/review.respository";
import {clicksTitlesRepository} from "./respositories/clicksTitles.repository";
import {clicksTypes} from "./schemas/create-click-types.schema";
import {sellerRepository} from "../sellers/seller.repository";
import {seller} from "../sellers/schemas/seller.schema";
import {clicksTitle} from "./schemas/create-clicks-titles.schema";
import {clicksTypesRepository} from "./respositories/clicksTypes.repository";


@Module({
  imports: [TypeOrmModule.forFeature([review ,clicksTitle,clicksTypes ,seller])],
  controllers: [ReviewController],
  providers: [ReviewService ,reviewRepository,sellerRepository,clicksTypesRepository,clicksTitlesRepository]
})
export class ReviewModule {}

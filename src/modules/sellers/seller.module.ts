import { Module } from '@nestjs/common';
import { SellerService } from './seller.service';
import { SellerController } from './seller.controller';
import {sellerRepository} from "./seller.repository";
import {seller} from "./schemas/seller.schema";
import { TypeOrmModule } from "@nestjs/typeorm";
import {CategoryRepository} from "../categories/category.repository";
import {category} from "../categories/schemas/category.schema";
import {review} from "../review/schemas/submit-review.schema";
import {reviewRepository} from "../review/respositories/review.respository";
import {clicksTypes} from "../review/schemas/create-click-types.schema";
import {clicksTypesRepository} from "../review/respositories/clicksTypes.repository";
import {clicksTitlesRepository} from "../review/respositories/clicksTitles.repository";
import {clicksTitle} from "../review/schemas/create-clicks-titles.schema";

@Module({
  imports: [
    TypeOrmModule.forFeature([seller,category,review,clicksTypes,clicksTitle]),
  ],

   controllers: [SellerController],
   providers: [SellerService ,sellerRepository, CategoryRepository,reviewRepository,clicksTypesRepository,clicksTitlesRepository]
})
export class SellerModule {}

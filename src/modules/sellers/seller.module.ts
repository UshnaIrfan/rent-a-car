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
import {clicks} from "../review/schemas/create-clicks-titles.schema";
import {clicksRepository} from "../review/respositories/clicksTitles.repository";
import {clicksTypes} from "../review/schemas/create-click-types.schema";
import {clicksTypesRepository} from "../review/respositories/clicksTypes.repository";

@Module({
  imports: [
    TypeOrmModule.forFeature([seller,category,review,clicks,clicksTypes]),
  ],

   controllers: [SellerController],
   providers: [SellerService ,sellerRepository, CategoryRepository,reviewRepository,clicksRepository,clicksTypesRepository]
})
export class SellerModule {}

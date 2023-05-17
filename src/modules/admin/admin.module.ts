import { CacheModule, Module } from "@nestjs/common";
import { AdminCategoryController } from './admin-category.controller';
import {CategoriesService} from "../categories/categories.service";
import {CategoryRepository} from "../categories/category.repository";
import {UsersRepository} from "../users/users.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { category } from "../categories/schemas/category.schema";
import { User } from "../users/schemas/user.schema";
import * as redisStore from "cache-manager-redis-store";
import {review} from "../review/schemas/submit-review.schema";
import {reviewRepository} from "../review/respositories/review.respository";
import {clicksTitle} from "../review/schemas/create-clicks-titles.schema";
import {clicksTitlesRepository} from "../review/respositories/clicksTitles.repository";
import {likeDislike} from "../review/schemas/like-dislike.schema";
import {likeDislikeRepository} from "../review/respositories/like-dislike.repository";
import {JwtService} from "@nestjs/jwt";
import {ReviewService} from "../review/review.service";
import {seller} from "../sellers/schemas/seller.schema";
import {sellerRepository} from "../sellers/seller.repository";
import {clicksTypes} from "../review/schemas/create-click-types.schema";
import {clicksTypesRepository} from "../review/respositories/clicksTypes.repository";
import {AdminSellerController} from "./admin-seller.controller";
import {SellerService} from "../sellers/seller.service";
import {adminAuthController} from "./admin-auth.controller";
import {AuthService} from "../auth/auth.service";
import {UsersService} from "../users/users.service";
import {adminReviewController} from "./admin-review.controller";


@Module({
  imports: [TypeOrmModule.forFeature([ clicksTypes,seller,likeDislike,category,User,review ,clicksTitle]),
    CacheModule.register({
      store: redisStore,
      uri: process.env.REDIS_URL,
    })],
  controllers: [adminReviewController,adminAuthController,AdminSellerController,AdminCategoryController],
  providers: [UsersService,AuthService,SellerService, clicksTypesRepository,sellerRepository, ReviewService,JwtService,likeDislikeRepository,CategoriesService,clicksTitlesRepository,CategoryRepository,UsersRepository,reviewRepository]
})
export class AdminModule {}

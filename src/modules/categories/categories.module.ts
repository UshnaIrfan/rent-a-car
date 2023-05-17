import { CacheModule, Module } from "@nestjs/common";
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import {CategoryRepository} from "./category.repository";
import {category} from "./schemas/category.schema";
import { TypeOrmModule } from '@nestjs/typeorm';
import {UsersRepository} from "../users/users.repository";
import {User} from "../users/schemas/user.schema";
import { JwtService } from '@nestjs/jwt';
import * as redisStore from 'cache-manager-redis-store';
import {reviewRepository} from "../review/respositories/review.respository";
import {review} from "../review/schemas/submit-review.schema";
import {clicksTitlesRepository} from "../review/respositories/clicksTitles.repository";
import {clicksTitle} from "../review/schemas/create-clicks-titles.schema";
import {likeDislikeRepository} from "../review/respositories/like-dislike.repository";
import {likeDislike} from "../review/schemas/like-dislike.schema";
import {ReviewService} from "../review/review.service";
import {ReviewModule} from "../review/review.module";
import {sellerRepository} from "../sellers/seller.repository";
import {seller} from "../sellers/schemas/seller.schema";
import {clicksTypes} from "../review/schemas/create-click-types.schema";
import {clicksTypesRepository} from "../review/respositories/clicksTypes.repository";

@Module({

  imports: [TypeOrmModule.forFeature([category ,clicksTypes,seller,User,review,clicksTitle,likeDislike ,ReviewModule]),
    CacheModule.register({
    store: redisStore,
    uri: process.env.REDIS_URL,
  })],
  controllers: [CategoriesController],
  providers: [clicksTypesRepository,sellerRepository,CategoriesService ,ReviewService,CategoryRepository,UsersRepository,JwtService,reviewRepository,clicksTitlesRepository,likeDislikeRepository],

})
export class CategoriesModule {}

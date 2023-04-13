import { CacheModule, Module } from "@nestjs/common";
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
import { JwtService } from "@nestjs/jwt";
import {UsersRepository} from "../users/users.repository";
import {User} from "../users/schemas/user.schema";
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [TypeOrmModule.forFeature([review ,clicksTitle,clicksTypes ,seller,User]),
    CacheModule.register({
      store: redisStore,
      uri: process.env.REDIS_URL,
    })],
  controllers: [ReviewController],
  providers: [ UsersRepository,JwtService,ReviewService ,reviewRepository,sellerRepository,clicksTypesRepository,clicksTitlesRepository]
})
export class ReviewModule {}
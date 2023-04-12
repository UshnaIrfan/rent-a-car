import { CacheModule, Module } from "@nestjs/common";
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
import {UsersRepository} from "../users/users.repository";
import {User} from "../users/schemas/user.schema";
import { JwtService } from '@nestjs/jwt';
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    TypeOrmModule.forFeature([seller,category,review,clicksTypes,clicksTitle ,User]),
    CacheModule.register({
      store: redisStore,
      uri: process.env.REDIS_URL,
    }),
  ],
   controllers: [SellerController],
   providers: [JwtService,SellerService ,sellerRepository, CategoryRepository,reviewRepository,clicksTypesRepository,clicksTitlesRepository,UsersRepository],

})
export class SellerModule {}

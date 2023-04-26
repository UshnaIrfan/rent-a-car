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


@Module({

  imports: [TypeOrmModule.forFeature([category,User,review,clicksTitle]),
    CacheModule.register({
    store: redisStore,
    uri: process.env.REDIS_URL,
  })],
  controllers: [CategoriesController],
  providers: [CategoriesService ,CategoryRepository,UsersRepository,JwtService,reviewRepository,clicksTitlesRepository],

})
export class CategoriesModule {}

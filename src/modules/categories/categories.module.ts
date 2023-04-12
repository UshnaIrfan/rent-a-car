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

@Module({

  imports: [TypeOrmModule.forFeature([category,User]),
    CacheModule.register({
    store: redisStore,
    uri: process.env.REDIS_URL,
  })],
  controllers: [CategoriesController],
  providers: [CategoriesService ,CategoryRepository,UsersRepository,JwtService],

})
export class CategoriesModule {}

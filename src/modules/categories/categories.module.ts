import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import {CategoryRepository} from "./category.repository";
import {category} from "./schemas/category.schema";
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({

  imports: [TypeOrmModule.forFeature([category])],
  controllers: [CategoriesController],
  providers: [CategoriesService ,CategoryRepository],

})
export class CategoriesModule {}

import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {UsersRepository} from "./users.repository";
import { TypeOrmModule } from '@nestjs/typeorm';
import {User} from "./schemas/user.schema";
import {review} from "../review/schemas/submit-review.schema";
import {reviewRepository} from "../review/respositories/review.respository";
import {clicksTypesRepository} from "../review/respositories/clicksTypes.repository";
import {clicksTitle} from "../review/schemas/create-clicks-titles.schema";
import {clicksTypes} from "../review/schemas/create-click-types.schema";
import {clicksTitlesRepository} from "../review/respositories/clicksTitles.repository";
import {category} from "../categories/schemas/category.schema";
import {CategoryRepository} from "../categories/category.repository";
import {contactUsRepository} from "../contact-us/contact-us.repository";
import {contact} from "../contact-us/schemas/contact-us.schema";


@Module({
  imports: [
      TypeOrmModule.forFeature([contact,User ,review,clicksTitle,clicksTypes,category]),
  ],
     controllers: [UsersController],
     providers: [contactUsRepository,CategoryRepository,reviewRepository,UsersService ,UsersRepository,clicksTypesRepository,clicksTitlesRepository],
     exports: [UsersRepository, UsersService],
})
export class UsersModule {}

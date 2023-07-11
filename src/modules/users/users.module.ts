import {UsersRepository} from "./users.repository";
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
import {likeDislikeRepository} from "../review/respositories/like-dislike.repository";
import {likeDislike} from "../review/schemas/like-dislike.schema";
import { UsersService } from "./users.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";


@Module({
  imports: [
      TypeOrmModule.forFeature([likeDislike,contact,User ,review,clicksTitle,clicksTypes,category]),
  ],
     controllers: [],
     providers: [ likeDislikeRepository,contactUsRepository,CategoryRepository,reviewRepository,UsersService ,UsersRepository,clicksTypesRepository,clicksTitlesRepository],
     exports: [UsersRepository, UsersService],
})
export class UsersModule {}

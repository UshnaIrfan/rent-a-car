import { Module } from '@nestjs/common';
import { ContactUsService } from './contact-us.service';
import { ContactUsController } from './contact-us.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import {contact} from "./schemas/contact-us.schema";
import {contactUsRepository} from "./contact-us.repository";
import { JwtService } from "@nestjs/jwt";
import {UsersRepository} from "../users/users.repository";
import {User} from "../users/schemas/user.schema";
import {reviewRepository} from "../review/respositories/review.respository";
import {review} from "../review/schemas/submit-review.schema";
import {clicksTitlesRepository} from "../review/respositories/clicksTitles.repository";
import {clicksTitle} from "../review/schemas/create-clicks-titles.schema";
import {clicksTypesRepository} from "../review/respositories/clicksTypes.repository";
import {clicksTypes} from "../review/schemas/create-click-types.schema";
import {category} from "../categories/schemas/category.schema";
import {CategoryRepository} from "../categories/category.repository";
import {likeDislikeRepository} from "../review/respositories/like-dislike.repository";
import {likeDislike} from "../review/schemas/like-dislike.schema";


@Module({
  imports: [TypeOrmModule.forFeature([likeDislike,contact,User ,review,clicksTypes,clicksTitle,category])],
  controllers: [ContactUsController],
  providers: [likeDislikeRepository,CategoryRepository,clicksTitlesRepository,clicksTypesRepository,JwtService,ContactUsService ,contactUsRepository,UsersRepository,reviewRepository]
})
export class ContactUsModule {}

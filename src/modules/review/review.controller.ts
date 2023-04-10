import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { ReviewService } from './review.service';
import { ApiBody, ApiTags } from "@nestjs/swagger";
import {createClicksTitlesDto} from "./dto/create-clicks-titles.dto";
import {createClicksTypesDto} from "./dto/create-click-types.dto";
import { submitReviewDto } from "./dto/submit-review.dto";
import { review } from "./schemas/submit-review.schema";
import {clicksTypes} from "./schemas/create-click-types.schema";
import { category } from "../categories/schemas/category.schema";
import paginationInterface from "./interfaces/pagination.interface";
import { clicksTitle } from "./schemas/create-clicks-titles.schema";


@ApiTags('Review')
@Controller('review')
export class ReviewController {
     constructor(private readonly reviewService: ReviewService
    ){}


       // create click types  (hidden)
        @ApiBody({type:createClicksTypesDto})
        @Post('createClicksTypes')
        async createClicksTypes(
        @Body() clicksReview:createClicksTypesDto):Promise<clicksTypes>
        {
           return this.reviewService.createClicksTypes(clicksReview);
        }






       // create click titles
        @ApiBody({type:createClicksTitlesDto})
        @Post('createClicksTitles')
        async createClicksTitle(
        @Body() clicksTypes:createClicksTitlesDto): Promise<{record:clicksTitle}>
        {
             return this.reviewService.createClicksTitles(clicksTypes);
        }




        //all review  titles with associated types
         @Get('all_types')
         async  getAllTitle( ):Promise<{types: clicksTypes[]}>
         {
            return this.reviewService.getAllTitle();
         }



         // submit review
         @ApiBody({type:submitReviewDto})
         @Post('submit')
         async submitReview(
         @Body() submitReview:submitReviewDto):Promise<review>
         {
            return this.reviewService.submitReview(submitReview);
         }




         // get  reviews (pagination)
         @Get('')
         async getReview(@Query('page') page: number = 1):Promise<paginationInterface>
         {
           return this.reviewService.getReview(page);
         }




}

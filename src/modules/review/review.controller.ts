import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  Request,
  UnauthorizedException,
  UseGuards
} from "@nestjs/common";
import { ReviewService } from './review.service';
import { ApiBearerAuth, ApiBody, ApiTags } from "@nestjs/swagger";
import {createClicksTitlesDto} from "./dto/create-clicks-titles.dto";
import {createClicksTypesDto} from "./dto/create-click-types.dto";
import { submitReviewDto } from "./dto/submit-review.dto";
import { review } from "./schemas/submit-review.schema";
import {clicksTypes} from "./schemas/create-click-types.schema";
import paginationInterface from "./interfaces/pagination.interface";
import { clicksTitle } from "./schemas/create-clicks-titles.schema";
import { JwtAuthGuard } from "../auth/guards/jwt-auth-guard";
import * as jwt from 'jsonwebtoken';


@ApiTags('Review')
@Controller('review')
export class ReviewController {
     constructor(private readonly reviewService: ReviewService,
     ){}


       // create click types
        @ApiBearerAuth()
        @ApiBody({type:createClicksTypesDto})
        @Post('createClicksTypes')
        async createClicksTypes(
        @Body() clicksReview:createClicksTypesDto,@Req() req):Promise<clicksTypes>
        {
           const accessToken = req.headers.authorization.split(' ')[1];
           return this.reviewService.createClicksTypes(clicksReview,accessToken);
        }






       // create click titles
        @ApiBearerAuth()
        @ApiBody({type:createClicksTitlesDto})
        @Post('createClicksTitles')
        async createClicksTitle(
        @Body() clicksTypes:createClicksTitlesDto,@Req() req): Promise<{record:clicksTitle}>
        {
             const accessToken = req.headers.authorization.split(' ')[1];
             return this.reviewService.createClicksTitles(clicksTypes,accessToken);
        }




        //all review  titles with associated types
         @Get('all-titles')
         async  getAllTitle( ):Promise<{title: clicksTypes[]}>
         {
            return this.reviewService.getAllTitle();
         }



         // submit review
         @ApiBearerAuth()
         @ApiBody({type:submitReviewDto})
         @Post('submit')
         async submitReview(
         @Body() submitReview:submitReviewDto, @Req() req): Promise<review>
         {
             const accessToken = req.headers.authorization.split(' ')[1];
             return this.reviewService.submitReview(submitReview ,accessToken);
         }




         // get  reviews (pagination)
         @Get('')
         async getReview(@Query('page') page: number = 1):Promise<paginationInterface>
         {
           return this.reviewService.getReview(page);
         }



      // balloons count
      // @Get('/count')
      // async getReviewsWithCounts()
      // {
      //    const reviews = await this.reviewService.getReviewsWithCounts();
      //    return reviews;
      // }
     @Get('/count/:seller_id')
     async getReviewsWithCounts(@Param('seller_id') sellerId: string)
     {
       const reviews = await this.reviewService.getReviewsWithCounts(sellerId);
       return reviews;
     }





     @Get('show/:seller_id')
    async getReviewsWithTypes(@Param('seller_id') sellerId: string)
    {
       const reviews = await this.reviewService.getReviewsWithTypes(sellerId);
       return reviews;
   }


}

import {
  Body,
  Controller,
  Get,
  Param, Patch,
  Post,
  Query,
  Req, UseGuards
} from "@nestjs/common";
import { ReviewService } from './review.service';
import { ApiBearerAuth, ApiBody, ApiTags } from "@nestjs/swagger";
import {createClicksTitlesDto} from "./dto/create-clicks-titles.dto";
import {createClicksTypesDto} from "./dto/create-click-types.dto";
import { submitReviewDto } from "./dto/submit-review.dto";
import { review } from "./schemas/submit-review.schema";
import {clicksTypes} from "./schemas/create-click-types.schema";
import { clicksTitle } from "./schemas/create-clicks-titles.schema";
import {updateReviewDto} from "./dto/update-review.dto";
import {seller} from "../sellers/schemas/seller.schema";
import { likeDislikeReviewDto } from "./dto/like-dislike-review.dto";
import { JwtAuthGuard } from "../auth/guards/jwt-auth-guard";
import {BlockRoles} from "../../decorators/block.decorators";
import {BlockRole} from "../../enums/block.enum";


@ApiTags('Review')
@Controller('review')
export class ReviewController {
     constructor(private readonly reviewService: ReviewService,
     ){}


         // create click types
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
         @Get('all-titles')
         async  getAllTitle( ):Promise<{title: clicksTypes[]}>
         {
            return this.reviewService.getAllTitle();
         }



         // submit review
         @ApiBearerAuth()
        // @UseGuards(JwtAuthGuard)
         @ApiBody({type:submitReviewDto})
         @Post('submit')
         @BlockRoles(BlockRole.UNBLOCK)
         async submitReview(
         @Body() submitReview:submitReviewDto,@Req() req): Promise<review>
         {
             const accessToken = req.headers.authorization.split(' ')[1];
             return this.reviewService.submitReview(submitReview,accessToken);
         }




         // balloons count
         @Get('/count/:seller_id')
         async getReviewsWithCounts(@Param('seller_id') sellerId: string):Promise<{ seller: seller, result: { titleId: string, count: number }[] }>
         {
            return  await this.reviewService.getReviewsWithCounts(sellerId);
         }




         // loved/air  review
         @Get('/:seller_id')
         async getReviewsWithTypes(
         @Param('seller_id') sellerId: string,
         @Query('page') page: number = 1)
         {
             return await this.reviewService.getReviewsWithTypes(sellerId, page);
         }



         //update review
         @Patch('update')
         async updateReview(
         @Body() updateReviewDto:updateReviewDto)
         {
            return this.reviewService.updateReview(updateReviewDto);
         }




        //like dislike submit review
        @ApiBearerAuth()
        @UseGuards(JwtAuthGuard)
        @ApiBody({type:likeDislikeReviewDto})
        @Post('likeDislike')
        async createLikeDislike(
        @Body() Review:likeDislikeReviewDto,@Req() req)
        {
          const accessToken = req.headers.authorization.split(' ')[1];
          return this.reviewService.createLikeDislike(Review,accessToken);
        }




}

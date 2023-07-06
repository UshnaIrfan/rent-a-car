import {
  Body,
  Controller,
  Get,
  Param, Patch,
  Post,
  Query,
} from "@nestjs/common";
import { ReviewService } from './review.service';
import { ApiBearerAuth, ApiBody, ApiQuery, ApiTags } from "@nestjs/swagger";
import {createClicksTitlesDto} from "./dto/create-clicks-titles.dto";
import {createClicksTypesDto} from "./dto/create-click-types.dto";
import { submitReviewDto } from "./dto/submit-review.dto";
import { review } from "./schemas/submit-review.schema";
import {clicksTypes} from "./schemas/create-click-types.schema";
import { clicksTitle } from "./schemas/create-clicks-titles.schema";
import {updateReviewDto} from "./dto/update-review.dto";
import {seller} from "../sellers/schemas/seller.schema";
import { likeDislikeReviewDto } from "./dto/like-dislike-review.dto";
import {BlockRoles} from "../../decorators/block.decorators";
import {BlockRole} from "../../enums/block.enum";
import AuthBearer from "../../decorators/auth-bearer.decorators";


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
         @ApiBody({type:submitReviewDto})
         @Post('submit')
         @BlockRoles(BlockRole.UNBLOCK)
         async submitReview(
         @Body() submitReview:submitReviewDto,@AuthBearer() accessToken: string): Promise<review>
         {
             return this.reviewService.submitReview(submitReview,accessToken);
         }




         // balloons count
         @Get('/count/:seller_id')
         async getReviewsWithCounts(@Param('seller_id') sellerId: string):Promise<{ seller: seller, result: { titleId: string, count: number }[] }>
         {
             return  await this.reviewService.getReviewsWithCounts(sellerId);
         }




         // loved/air  review
         // @Get('/:seller_id')
         // async getReviewsWithTypes(
         // @Param('seller_id') sellerId: string,
         // @Query('page') page: number = 1)
         // {
         //     return await this.reviewService.getReviewsWithTypes(sellerId, page);
         // }



         //updated    ( love /air review)
        // @ApiQuery({ name: 'seller_id', required:true})
        // @ApiQuery({ name: 'tittle_id', required: false })
        // @ApiQuery({ name: 'page', type: Number, required: true })
        // @Get('/:seller_id/title_id')
        // async getReviewsWithTypes(@Query('seller_id')seller_id?: string,@Query('tittle_id') tittle_id?: string,@Query('page') page: number = 1)
        // {
        //    console.log("here",seller_id,tittle_id,page)
        //    return await this.reviewService.getReviewsWithTypes(seller_id,tittle_id, page);
        // }


          @ApiQuery({ name: 'seller_id', required:true})
          @ApiQuery({ name: 'tittle_id', required: false })
          @ApiQuery({ name: 'type', required: false })
          @ApiQuery({ name: 'page', type: Number, required: true })
          @Get('/:seller_id/title_id/type')
          async getReviewsWithTypes(@Query('seller_id')seller_id?: string,@Query('tittle_id') tittle_id?: string,@Query('type') type?: string,@Query('page') page: number = 1)
          {
            console.log("here",seller_id,tittle_id,page)
            return await this.reviewService.getReviewsWithTypes(seller_id,tittle_id,type, page);
          }



        //update review
         @ApiBearerAuth()
         @Patch('update')
         @BlockRoles(BlockRole.UNBLOCK)
         async updateReview(@Body() updateReviewDto:updateReviewDto,@AuthBearer() accessToken: string)
         {
            return this.reviewService.updateReview(updateReviewDto,accessToken);
         }




        //like dislike submit review
        @ApiBearerAuth()
        @ApiBody({type:likeDislikeReviewDto})
        @Post('likeDislike')
        @BlockRoles(BlockRole.UNBLOCK)
        async createLikeDislike(@Body() Review:likeDislikeReviewDto,@AuthBearer() accessToken: string)
        {
            return this.reviewService.createLikeDislike(Review,accessToken);
        }


}

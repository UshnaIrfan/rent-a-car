import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ReviewService } from './review.service';
import { ApiBody, ApiTags } from "@nestjs/swagger";
import {createClicksTitlesDto} from "./dto/create-clicks-titles.dto";
import {createClickTypesDto} from "./dto/create-click-types.dto";
import { clicks } from "./schemas/create-clicks-titles.schema";
import { submitReviewDto } from "./dto/submit-review.dto";
import { review } from "./schemas/submit-review.schema";
import { clicksTypes } from "./schemas/create-click-types.schema";

@ApiTags('Review')
@Controller('review')
export class ReviewController {
     constructor(private readonly reviewService: ReviewService
    ){}


       // create click titles  (hidden)
       //  @ApiBody({type:createClicksTitlesDto})
       //  @Post('createClicks')
       //  async createClicks(
       //  @Body() clicksReview:createClicksTitlesDto):Promise<clicks>
       //  {
       //     return this.reviewService.createClicks(clicksReview);
       //  }


      // create click types  (many to many relation)
      //   @ApiBody({type:createClickTypesDto})
      //   @Post('createClicksTypes')
      //   async createClickedTypes(
      //   @Body() clicksTypes:createClickTypesDto)
      //   {
      //     return this.reviewService.createClickedTypes(clicksTypes);
      //   }




        // create click types  (simple)
        @ApiBody({type:createClickTypesDto})
        @Post('createClicksTypes')
        async createClicksTypes(
        @Body() clicksTypes:createClickTypesDto):Promise<{ record:clicksTypes}>
        {
             return this.reviewService.createClicksTypes(clicksTypes);
        }




        // //all review types with titles
        // @Get('all_types')
        // async  getAllTypes( ):Promise<{ slugs:clicks[], types: clicksTypes[]}>
        // {
        //    return this.reviewService.getAllTypes();
        // }


        //all review  types
         @Get('all_types')
         async  getAllTypes( ):Promise<{types: clicksTypes[]}>
         {
            return this.reviewService.getAllTypes();
         }




         // submit review
         @ApiBody({type:submitReviewDto})
         @Post('submit')
         async submitReview(
         @Body() createReview:submitReviewDto):Promise<review>
         {
            return this.reviewService.submitReview(createReview);
         }




      //get review title associated with review types
      // @Get('/name/:slug_name')
      // async  getReviewBySlugName( @Param('slug_name') slug: string):Promise<{ record: clicks }>
      // {
      //   return this.reviewService.getReviewBySlugName(slug);
      // }

 }

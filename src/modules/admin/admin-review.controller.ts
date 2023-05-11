import { Body, Controller, Get, Patch, Query } from "@nestjs/common";
import { ApiBearerAuth, ApiBody, ApiQuery, ApiTags } from "@nestjs/swagger";
import {ReviewService} from "../review/review.service";
import { Roles } from "../../decorators/role.decorators";
import { Role } from "../../enums/role.enum";
import {adminUpdateSubmitReviewDto} from "../review/dto/admin-update-submit-review.dto";


@ApiTags('admin')
@Controller('admin')
export class adminReviewController {
  constructor(private readonly reviewService:ReviewService) {}




     // review search
     @ApiBearerAuth()
     @ApiQuery({ name: 'page', type: Number, required: true })
     @ApiQuery({ name: 'sellerId', required: false })
     @ApiQuery({ name: 'userId', required: false })
     @ApiQuery({ name: 'message', required: false })
     @ApiQuery({ name: 'type', required: false })
     @ApiQuery({ name: 'categoryId', required: false })
     @Get('review/search')
     @Roles(Role.L2A_ADMIN)
     async search(@Query('page') page: number = 1, @Query('sellerId') sellerId?: string,
                  @Query('userId') userId?: string,@Query('message') message?: string,
                  @Query('type') type?: string ,@Query('categoryId') categoryId?: string)

     {
          return this.reviewService.search(page , sellerId,userId,message ,type,categoryId);
     }





      // admin update  review status
      @ApiBearerAuth()
      @ApiBody({type:adminUpdateSubmitReviewDto})
      @Patch('review/update/status')
      @Roles(Role.L2A_ADMIN)
      async adminUpdateReview(@Body() adminUpdateSubmitReviewdto:adminUpdateSubmitReviewDto)
      {
        return this.reviewService.adminUpdateReview(adminUpdateSubmitReviewdto);
      }



}

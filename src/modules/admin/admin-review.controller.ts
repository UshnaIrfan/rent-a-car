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
      @ApiQuery({ name: 'pageSize', type: Number, required:false})
      @ApiQuery({ name: 'sellerId', required: false })
      @ApiQuery({ name: 'userId', required: false })
      @ApiQuery({ name: 'message', required: false })
      @ApiQuery({ name: 'type', required: false })
      @ApiQuery({ name: 'categoryId', required: false })
      @ApiQuery({ name: 'orderType', required: false })
      @ApiQuery({ name: 'orderBy', required: false })
    //  @ApiQuery({ name: 'startDate', required: false })
     // @ApiQuery({ name: 'endDate', required: false })
      @Get(':review/search')
      @Roles(Role.L2A_ADMIN)
      async search(@Query('page') page: number = 1,@Query('pageSize') pageSize: number =10, @Query('sellerId') sellerId?: string,
               @Query('userId') userId?: string,@Query('message') message?: string,
               @Query('type') type?: string ,@Query('categoryId') categoryId?: string,
               @Query('orderBy') orderBy?: string,@Query('orderType') orderType?: string,
             //  @Query('startDate') startDate?: string,  @Query('endDate')endDate?: string
                   )

     {
          return this.reviewService.search(page ,pageSize, sellerId,userId,message ,type,categoryId ,orderType,orderBy,);
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

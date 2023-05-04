import { Controller, Get, Query } from "@nestjs/common";
import { ApiQuery, ApiTags } from "@nestjs/swagger";
import { Role } from "../../enums/role.enum";
import { Roles } from "../../decorators/role.decorators";
import {ReviewService} from "../review/review.service";


@ApiTags('admin')
@Controller('admin')
export class adminReviewController {
  constructor(private readonly reviewService:ReviewService) {}






  @ApiQuery({ name: 'page', type: Number, required: true })
  @ApiQuery({ name: 'sellerId', required: false })
  @ApiQuery({ name: 'userId', required: false })
  @ApiQuery({ name: 'message', required: false })
  @ApiQuery({ name: 'type', required: false })
  @ApiQuery({ name: 'categoryId', required: false })
  @Get('review/search')
  async search(@Query('page') page: number = 1, @Query('sellerId') sellerId?: string,
               @Query('userId') userId?: string,@Query('message') message?: string,
               @Query('type') type?: string ,@Query('categoryId') categoryId?: string)

  {
        return this.reviewService.search(page , sellerId,userId,message ,type,categoryId);
  }



}

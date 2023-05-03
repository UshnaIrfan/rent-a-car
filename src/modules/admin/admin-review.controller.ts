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
  @ApiQuery({ name: 'query', required: false })
  @ApiQuery({ name: 'sellerId', required: false })
  @ApiQuery({ name: 'categoryId', required: false })
  @ApiQuery({ name: 'userId', required: false })
  @ApiQuery({ name: 'type', required: false })
  @Get('review/search')
  async search(@Query('page') page: number = 1,@Query('query') query?: string, @Query('sellerId') sellerId?: string,
               @Query('userId') userId?: string,@Query('type') type?: string,
               @Query('categoryId') categoryId?: string)
  {
    return this.reviewService.search(page ,query, sellerId,userId,type,categoryId);
  }



}

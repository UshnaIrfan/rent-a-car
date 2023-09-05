import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TimeService } from './time.service';
import { CreateTimeDto } from './dto/create-time.dto';
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { time } from "./schemas/time.schema";
import { UpdateTimeDto } from "./dto/update-time.dto";

@ApiTags('time')
@Controller('time')
export class TimeController {
  constructor(private readonly timeService: TimeService) {}


        // create
        @ApiBody({type:CreateTimeDto})
        @Post('create')
        async createTime(@Body() createTimeDto: CreateTimeDto):Promise<time>
        {
          return this.timeService.createTime(createTimeDto);
        }



        // get time
        @Get('all')
        async  getTime():Promise<time[]>
        {
          return this.timeService.getTime();
        }


        // update  time
        @Patch('/:timeId')
        async  updateTime(@Param('timeId') timeId:string, @Body() body:UpdateTimeDto )
        {
          return this.timeService.updateTime(timeId,body);
        }


        // delete  time
        @Delete('/:timeId')
        async  deleteTime(@Param('timeId') timeId:string )
        {
          return this.timeService.deleteTime(timeId);
        }
}

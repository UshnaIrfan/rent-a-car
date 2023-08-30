import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ParseUUIDPipe } from "@nestjs/common";
import { YearService } from './year.service';
import { CreateYearDto } from './dto/create-year.dto';
import { UpdateYearDto } from './dto/update-year.dto';
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { year } from "./schemas/year.schema";


@ApiTags('year')
@Controller('year')
export class YearController {
  constructor(private readonly yearService: YearService) {
  }

          // create
          @ApiBody({ type: CreateYearDto })
          @Post('create')
          async createYear(@Body() createYearDto: CreateYearDto):Promise<year>
          {
              return this.yearService.createYear(createYearDto);
          }



          // get all  car year
          @Get('all')
          async  getAllCarYear(): Promise<year[]| null>
          {
             return this.yearService.getAllCarYear();
          }


         // update  car year
          @Patch('/:yearId')
          async  updateCarYear(@Param('yearId') yearId:string, @Body() body:UpdateYearDto )
          {
            return this.yearService.updateCarYear(yearId,body);
          }



          // delete  car year
          @Delete('/:yearId')
          async  deleteCarYear(@Param('yearId') yearId:string )
          {
            return this.yearService.deleteCarYear(yearId,);
          }

}




import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ColorService } from './color.service';
import { CreateColorDto } from './dto/create-color.dto';
import { UpdateColorDto } from './dto/update-color.dto';
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { seatsCapacity } from "../seats-capacity/schemas/seats-capacity.schema";
import { color } from "./schemas/color.schema";
import { updateDriverDocumentsDto } from "../driver/dto/update-driver-documents.dto";


@ApiTags('color')
@Controller('color')
export class ColorController {
  constructor(private readonly colorService: ColorService) {}

        // create
        @ApiBody({type:CreateColorDto})
        @Post('create')
        async createColor(@Body() createColorDto: CreateColorDto)
        {
          return this.colorService.createColor(createColorDto);
        }


        // get all  color
        @Get('all')
        async  getCarColor(): Promise<color[]>
        {
          return this.colorService.getCarColor();
        }


        // update  color
        @Patch('/:colorId')
        async  updateCarColor(@Param('colorId') colorId:string, @Body() body:UpdateColorDto )
        {
          return this.colorService.updateCarColor(colorId,body);
        }


        // delete  color
        @Delete('/:colorId')
        async  deleteCarColor(@Param('colorId') colorId:string )
        {
          return this.colorService.deleteCarColor(colorId,);
        }

}

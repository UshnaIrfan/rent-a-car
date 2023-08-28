import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarTypeService } from './car-type.service';
import { CreateCarTypeDto } from './dto/create-car-type.dto';
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { carType } from "./schemas/car-type.schema";
import { UpdateCarTypeDto } from "./dto/update-car-type.dto";



@ApiTags('carType')
@Controller('car-type')
export class CarTypeController {
  constructor(private readonly carTypeService: CarTypeService) {}

      // create
      @ApiBody({type:CreateCarTypeDto})
      @Post('create')
      async createCarType(@Body() createCarTypeDto: CreateCarTypeDto)
      {
        return this.carTypeService.createCarType(createCarTypeDto);
      }



      // get all  car types
      @Get('all')
      async  getCarTypes():Promise<carType[]>
      {
        return this.carTypeService.getCarTypes();
      }


      // update  car types
      @Patch('/:cartypeId')
      async  updateCarTypes(@Param('cartypeId') cartypeId:string, @Body() body:UpdateCarTypeDto )
      {
        return this.carTypeService.updateCarTypes(cartypeId,body);
      }


      // delete  car types
      @Delete('/:cartypeId')
      async  deleteCarTypes(@Param('cartypeId') cartypeId:string )
      {
          return this.carTypeService.deleteCarTypes(cartypeId,);
      }

}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarModelService } from './car-model.service';
import { CreateCarModelDto } from './dto/create-car-model.dto';
import { UpdateCarModelDto } from './dto/update-car-model.dto';
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { carModel } from "./schemas/car-model.schema";


@ApiTags('carModel')
@Controller('car-model')
export class CarModelController {
  constructor(private readonly carModelService: CarModelService) {}

        // create
        @ApiBody({type:CreateCarModelDto})
        @Post('create')
        async createCarModel(@Body() createCarModelDto: CreateCarModelDto)
        {
          return this.carModelService.createCarModel(createCarModelDto);
        }


        // get all  car model
        @Get('all')
        async  getCarModel():Promise<carModel[]>
        {
          return this.carModelService.getCarModel();
        }


        // update  car model
        @Patch('/:modelId')
        async  updateCarModel(@Param('modelId') modelId:string, @Body() body:UpdateCarModelDto )
        {
            return this.carModelService.updateCarModel(modelId,body);
        }


        // delete  car model
        @Delete('/:modelId')
        async  deleteCarModel(@Param('modelId') modelId:string )
        {
          return this.carModelService.deleteCarModel(modelId,);
        }

}

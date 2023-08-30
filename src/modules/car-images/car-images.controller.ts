import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarImagesService } from './car-images.service';
import { CreateCarImageDto } from './dto/create-car-image.dto';
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { UpdateCarImageDto } from "./dto/update-car-image.dto";
import { carImage } from "./schemas/car-image.schema";

@ApiTags('carImages')
@Controller('car-images')
export class CarImagesController {
  constructor(private readonly carImagesService: CarImagesService) {}


        // create
        @ApiBody({type:CreateCarImageDto})
        @Post('create')
        async createCarImage(@Body() createCarImageDto: CreateCarImageDto)
        {
          return this.carImagesService.createCarImage(createCarImageDto);
        }



         // get all  car image
          @Get('all')
          async  getCarImage(): Promise<carImage[]>
          {
            return this.carImagesService.getCarImage();
          }


        // update car image
          @Patch('/:carImageId')
          async  updateCarImage(@Param('carImageId') carImageId:string, @Body() body:UpdateCarImageDto )
          {
            return this.carImagesService.updateCarImage(carImageId,body);
          }


          // delete car image
          @Delete('/:carImageId')
          async  deleteCarImage(@Param('carImageId') carImageId:string )
          {
            return this.carImagesService.deleteCarImage(carImageId);
          }
}

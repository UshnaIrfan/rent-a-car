import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from "@nestjs/common";
import { CarImagesService } from './car-images.service';
import { CreateCarImageDto } from './dto/create-car-image.dto';
import { ApiBearerAuth, ApiBody, ApiTags } from "@nestjs/swagger";
import { UpdateCarImageDto } from "./dto/update-car-image.dto";
import { carImage } from "./schemas/car-image.schema";
import { Roles } from "../../decorators/role.decorators";
import { Role } from "../../enums/role.enum";
import { UserAuthGuard } from "../../guards/user-auth-guard";

@ApiTags('carImages')
@Controller('car-images')
export class CarImagesController {
  constructor(private readonly carImagesService: CarImagesService) {}


        // create
        @ApiBearerAuth()
        @Roles(Role.RENTER)
        @UseGuards(UserAuthGuard)
        @ApiBody({type:CreateCarImageDto})
        @Post('create')
        async createCarImage(@Body() createCarImageDto: CreateCarImageDto,@Req() request: any)
        {
          return this.carImagesService.createCarImage(createCarImageDto,request.user.id);
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

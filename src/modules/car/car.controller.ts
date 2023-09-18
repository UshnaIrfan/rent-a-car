import {
      Controller,
      Post,
      Body,
      Patch,
      Param,
      Get,
      UsePipes,
      ParseUUIDPipe,
      Delete,
      Query,
      UseGuards, Req
} from "@nestjs/common";
import { CarService } from './car.service';
import { createCarDto } from './dto/create-car.dto';
import { ApiBearerAuth, ApiBody, ApiQuery, ApiTags } from "@nestjs/swagger";
import { car } from "./schemas/car.schema";
import { Role } from "../../enums/role.enum";
import { Roles } from "../../decorators/role.decorators";
import { getAllCarsRenterDecorators } from "./swagger-decorator/get-all-cars-renter-decorators";
import { getCarHistoryRenterDecorators } from "./swagger-decorator/get-car-history-renter-decorators";
import { UserAuthGuard } from "../../guards/user-auth-guard";
import { updateCarDto } from "./dto/update-car.dto";
import { updateCarDecorators } from "./swagger-decorator/update-car-decorators";

@ApiTags('car')
@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {}


        // create
        @ApiBearerAuth()
        @ApiBody({type:createCarDto})
        @Post('create')
        @Roles(Role.RENTER)
        @UseGuards(UserAuthGuard)
        async create(@Body() CreateCarDto: createCarDto,@Req() request: any): Promise<car>
        {
            return this.carService.createCar(CreateCarDto,request.user.id);
        }



        // Get car by user id
        @getAllCarsRenterDecorators()
        @Get('/user/:userId')
        async  getCarByUserId(@Param('userId') userId:string ):Promise<car[]>
        {
          console.log("userId");
          return this.carService.getCarByUserId(userId);
        }



        // Get car by car id
        @Get('/car/:carId')
        async  getCarByCarId(@Param('carId') carId:string ):Promise<car>
        {
            console.log("carId");
            return this.carService.getCarByCarId(carId);
        }



        // delete by car id
        @Delete('/:carId')
        async  deleteCarById(@Param('carId') carId:string )
        {
          return this.carService.deleteCarById(carId);
        }





        // Get car  history by user id and car id
        @getCarHistoryRenterDecorators()
        @ApiQuery({ name: 'userId', required: true })
        @ApiQuery({ name: 'carId', required: false })
        @Get('history')
        async  getCarHistory(@Query('userId') userId?: string, @Query('carId') carId?: string )
        {
            console.log("history");
             return this.carService.getCarHistory(userId,carId);
        }


        //update car by  id
        @updateCarDecorators()
        @Patch('/:carId')
        async  updateCarByCarId(@Param('carId') carId:string, @Body() body :updateCarDto)
        {
              return this.carService.updateCarByCarId(carId,body);
        }




    // // delete car history  by user id
    //   @ApiQuery({ name: 'userId', required: true })
    //   @Delete('history/:userId')
    //   async  deleteCarHistory(@Query('userId') userId: string )
    //   {
    //         console.log(" delete history")
    //         return this.carService.deleteCarHistory(userId);
    //   }





     // search and get  car id for booking purpose
      @ApiQuery({ name: 'carTypes', required: false })
      @ApiQuery({ name: 'brands', required: false })
      @ApiQuery({ name: 'transmission', required: false })
      @ApiQuery({ name: 'color', required: false })
      @ApiQuery({ name: 'minPrice', required: false })
      @ApiQuery({ name: 'maxPrice', required: false })
      @ApiQuery({ name: 'area', required: false })
      @Get('/booking/:CarId')
      async Search(@Query('carTypes') carTypes?: string, @Query('brands') brands?: string,@Query('transmission') transmission?: string,@Query('color') color?: string,
        @Query('minPrice') minPrice?: string, @Query('maxPrice') maxPrice?: string,@Query('area') area?: string)
      {

        console.log("search");
        return this.carService.Search(carTypes,brands,transmission,color,minPrice,maxPrice,area);
      }

}

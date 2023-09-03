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
import { carModel } from "../car-model/schemas/car-model.schema";
import { UpdateCarModelDto } from "../car-model/dto/update-car-model.dto";
import { Role } from "../../enums/role.enum";
import { Roles } from "../../decorators/role.decorators";
import AuthBearer from "../../decorators/auth-bearer.decorators";
import { getAllCarsRenterDecorators } from "./swagger-decorator/get-all-cars-renter-decorators";
import { getCarHistoryRenterDecorators } from "./swagger-decorator/get-car-history-renter-decorators";
import { JwtAuthGuard } from "../auth/guards/jwt-auth-guard";
import { UserAuthGuard } from "../../guards/user-auth-guard";

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
          return this.carService.getCarByUserId(userId);
        }



        // Get car by car id
        @Get('/car/:carId')
        async  getCarByCarId(@Param('carId') carId:string ):Promise<car>
        {
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
             return this.carService.getCarHistory(userId,carId);
        }



}

import { Controller, Post, Body, Patch, Param, Get, UsePipes, ParseUUIDPipe } from "@nestjs/common";
import { CarService } from './car.service';
import { createCarDto } from './dto/create-car.dto';
import { ApiBearerAuth, ApiBody, ApiTags } from "@nestjs/swagger";
import { car } from "./schemas/car.schema";
import { carModel } from "../car-model/schemas/car-model.schema";
import { UpdateCarModelDto } from "../car-model/dto/update-car-model.dto";
import { Role } from "../../enums/role.enum";
import { Roles } from "../../decorators/role.decorators";
import AuthBearer from "../../decorators/auth-bearer.decorators";

@ApiTags('car')
@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {}


        // create
        @ApiBearerAuth()
        @ApiBody({type:createCarDto})
        @Post('create')
        @Roles(Role.RENTER)
        async create(@Body() CreateCarDto: createCarDto,@AuthBearer() accessToken: string): Promise<car>
        {
            return this.carService.createCar(CreateCarDto,accessToken);
        }




        // Get by car id
        @Get('/:carId')
        @UsePipes(ParseUUIDPipe)
        async  getCaById(@Param('carId') carId:string ):Promise<car>
        {
            return this.carService.getCaById(carId);
        }

}

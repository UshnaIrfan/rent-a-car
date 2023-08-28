import { Controller, Post, Body, Patch, Param } from "@nestjs/common";
import { CarService } from './car.service';
import { createCarDto } from './dto/create-car.dto';
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { updateDriverDocumentsDto } from "../driver/dto/update-driver-documents.dto";
import { car } from "./schemas/car.schema";

@ApiTags('car')
@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {}


        // create
        @ApiBody({type:createCarDto})
        @Post('create')
        async create(@Body() CreateCarDto: createCarDto): Promise<car>
        {
            return this.carService.createCar(CreateCarDto);
        }




}

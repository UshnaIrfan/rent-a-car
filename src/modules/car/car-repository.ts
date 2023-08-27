import { Injectable } from "@nestjs/common";
import {  Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { createCarDto } from "./dto/create-car.dto";
import { car } from "./schemas/car.schema";


@Injectable()
export class carRepository{
  constructor(@InjectRepository(car) private carModel: Repository<car>
  ) {}


      // create
        async createCar(CreateCarDto: createCarDto): Promise<car| null>
        {
          return this.carModel.save(CreateCarDto);
        }



}


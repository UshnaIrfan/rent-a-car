import { Injectable, NotFoundException } from "@nestjs/common";
import {  Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { createCarDto } from "./dto/create-car.dto";
import { car } from "./schemas/car.schema";
import { carModel } from "../car-model/schemas/car-model.schema";
import * as uuid from "uuid";


@Injectable()
export class carRepository{
  constructor(@InjectRepository(car) private carModel: Repository<car>
  ) {}


      // create
        async createCar(CreateCarDto: any): Promise<car| null>
        {
          return this.carModel.save(CreateCarDto);
        }


       // Get by car id
        async getCaById(carId:string):Promise<car| null>
        {
          if (!uuid.validate(carId))
          {
            throw new NotFoundException('Invalid UUID Format');
          }
            return  this.carModel.findOne({  where: { id:carId},
            relations:['pricing','carImage']});
        }

}


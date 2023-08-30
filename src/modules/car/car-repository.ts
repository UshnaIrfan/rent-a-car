import { Injectable } from "@nestjs/common";
import {  Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { car } from "./schemas/car.schema";
import { validateUuid } from "../../decorators/uuid.decorators";


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
        async getCarById(carId:string):Promise<car| null>
        {
            validateUuid(carId);
            return  this.carModel.findOne({  where: { id:carId},
            relations:['pricing','carImage']});
        }

}


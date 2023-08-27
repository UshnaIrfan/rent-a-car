import { Injectable } from '@nestjs/common';
import createCarTypeInterface from "./interfaces/create-car-type.interface";
import { CarTypeRepository } from "./car-type.repository";
import { year } from "../year/schemas/year.schema";
import { carType } from "./schemas/car-type.schema";
import { updateDriverDocumentsDto } from "../driver/dto/update-driver-documents.dto";
import { UpdateCarTypeDto } from "./dto/update-car-type.dto";

@Injectable()
export class CarTypeService {
  constructor(private readonly carTypeRepository:CarTypeRepository) {}



      // create
      async createCarType(createCarTypeInterface:createCarTypeInterface)
      {
        return  await this.carTypeRepository.createCarType(createCarTypeInterface);
      }




      // get all  car types
      async getCarTypes ():Promise<carType[]>
      {
        return  await this.carTypeRepository.getCarTypes();
      }



      // update  car types
      async updateCarTypes (cartypeId:string,body:UpdateCarTypeDto)
      {
        return  await this.carTypeRepository.updateCarTypes(cartypeId,body);
      }



      // delete  car types
      async deleteCarTypes(cartypeId:string)
      {
        return  await this.carTypeRepository.deleteCarTypes(cartypeId);
      }

}

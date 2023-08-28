import { Injectable, NotFoundException } from "@nestjs/common";
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
        const  result= await this.carTypeRepository.getCarTypes();
        if (result.length==0)
        {
          throw new NotFoundException('car types not exist');
        }
        return  result
      }



      // update  car types
      async updateCarTypes (cartypeId:string,body:UpdateCarTypeDto):Promise<{ carType:carType; message: string }>
      {
        const carType=await this.carTypeRepository.updateCarTypes(cartypeId,body);
        return { message: "updated successfully", carType};

      }



      // delete  car types
      async deleteCarTypes(cartypeId:string):Promise<{ carType:carType; message: string }>
      {
        const carType= await this.carTypeRepository.deleteCarTypes(cartypeId);
        return { message: "deleted successfully", carType};

      }



      // get  car types
      async getCarTypeById(cartypeId:string): Promise<carType>
      {
        return  await this.carTypeRepository.getCarTypeById(cartypeId);
      }

}

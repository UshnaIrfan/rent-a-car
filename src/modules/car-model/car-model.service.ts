import { Injectable } from '@nestjs/common';
import { CreateCarModelDto } from './dto/create-car-model.dto';
import { UpdateCarModelDto } from './dto/update-car-model.dto';
import createCarModelInterface from "./interfaces/create-car-model.interface";
import { CarModelRepository } from "./car-model.repository";
import { carModel } from "./schemas/car-model.schema";
import { updateDriverDocumentsDto } from "../driver/dto/update-driver-documents.dto";

@Injectable()
export class CarModelService {

  constructor(private readonly carModelRepository:CarModelRepository) {}


        // create
        async createCarModel(createCarModelIinterface:createCarModelInterface)
        {
          return  await this.carModelRepository.createCarModel(createCarModelIinterface);
        }


        // get all  car model
        async getCarModel ():Promise<carModel[]>
        {
          return  await this.carModelRepository.getCarModel();
        }



      // update  car model
        async updateCarModel (modelId:string,body:UpdateCarModelDto)
        {
          return  await this.carModelRepository.updateCarModel(modelId,body);
        }



       // delete  car model
        async deleteCarModel(modelId:string)
        {
             return  await this.carModelRepository.deleteCarModel(modelId);
        }

}

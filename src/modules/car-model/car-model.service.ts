import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { UpdateCarModelDto } from './dto/update-car-model.dto';
import createCarModelInterface from "./interfaces/create-car-model.interface";
import { CarModelRepository } from "./car-model.repository";
import { carModel } from "./schemas/car-model.schema";

@Injectable()
export class CarModelService {

  constructor(private readonly carModelRepository:CarModelRepository) {}


        // create
        async createCarModel(createCarModelIinterface:createCarModelInterface)
        {
            const result = await this.carModelRepository.findCarModelByName(createCarModelIinterface.model);
            if (result)
            {
              throw new ConflictException('This car model already exists');
            }
            return  await this.carModelRepository.createCarModel(createCarModelIinterface);
        }


        // get all  car model
        async getCarModel ():Promise<carModel[]>
        {
          const result= await this.carModelRepository.getCarModel();
          if (result.length==0)
          {
            throw new NotFoundException('car model not exist');
          }
          return  result
        }



      // update  car model
        async updateCarModel (modelId:string,body:UpdateCarModelDto):Promise<{ carModel:carModel; message: string }>
        {
            const carModel = await this.carModelRepository.updateCarModel(modelId,body);
            return { message: "updated successfully", carModel};
        }



       // delete  car model
        async deleteCarModel(modelId:string):Promise<{ carModel:carModel; message: string }>
        {
              const carModel= await this.carModelRepository.deleteCarModel(modelId);
              return { message: "deleted successfully", carModel};
        }



        // get by car model
        async getCarModelById(modelId:string): Promise<carModel>
        {
          return  await this.carModelRepository.getCarModelById(modelId);
        }

}

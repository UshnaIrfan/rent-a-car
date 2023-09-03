import { Injectable, NotFoundException } from "@nestjs/common";
import {  Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { carModel } from "./schemas/car-model.schema";
import { CreateCarModelDto } from "./dto/create-car-model.dto";
import { UpdateCarModelDto } from "./dto/update-car-model.dto";
import { validateUuid } from "../../decorators/uuid.decorators";


@Injectable()
export class CarModelRepository {
  constructor(@InjectRepository(carModel) private carModel: Repository<carModel>
  ) {}


        // create
        async createCarModel(createCarModelDto: CreateCarModelDto): Promise<carModel| null>
        {
          return this.carModel.save(createCarModelDto);
        }



        // get all  car model
        async getCarModel(): Promise<carModel[]| null>
        {
          return  this.carModel.find({ });
        }



       // update  car model
        async updateCarModel(modelId: string, body: UpdateCarModelDto): Promise<carModel| null>
        {
            validateUuid([modelId]);
            const result = await this.carModel.findOne({ where: { id:modelId}});
            if (!result)
            {
              throw new NotFoundException('car model not found');
            }
            result.model = body.model;
            const updatedResult = await this.carModel.save(result);
            return updatedResult;
        }





      // delete  car model
        async deleteCarModel(modelId:string): Promise<carModel| null>
        {
              validateUuid([modelId]);
              const result = await this.carModel.findOne({ where: { id:modelId}});
              if (!result)
              {
                throw new NotFoundException('car model not found');
              }
              return await this.carModel.remove(result);

        }




        // get by car model
        async getCarModelById(modelId:string): Promise<carModel| null>
        {
            validateUuid([modelId]);
            const result = await this.carModel.findOne({ where: { id:modelId}});
            return result
        }
}


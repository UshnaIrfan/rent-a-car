import { Injectable, NotFoundException } from "@nestjs/common";
import {  Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { carModel } from "./schemas/car-model.schema";
import { CreateCarModelDto } from "./dto/create-car-model.dto";
import { year } from "../year/schemas/year.schema";
import { updateDriverDocumentsDto } from "../driver/dto/update-driver-documents.dto";
import * as uuid from "uuid";
import path from "path";
import fs from "fs";
import { UpdateBaggageOptionDto } from "../baggage-option/dto/update-baggage-option.dto";
import { UpdateCarModelDto } from "./dto/update-car-model.dto";


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
        async updateCarModel(modelId: string, body: UpdateCarModelDto)
        {
            if (!uuid.validate(modelId))
            {
              throw new NotFoundException('Invalid UUID Format');
            }

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
        async deleteCarModel(modelId:string)
        {
              if (!uuid.validate(modelId))
              {
                throw new NotFoundException('Invalid UUID Format');
              }

              const result = await this.carModel.findOne({ where: { id:modelId}});
              if (!result)
              {
                throw new NotFoundException('car model not found');
              }
              return await this.carModel.remove(result);

        }
}


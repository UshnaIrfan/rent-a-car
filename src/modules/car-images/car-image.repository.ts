import { Injectable, NotFoundException } from "@nestjs/common";
import {  Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { carImage } from "./schemas/car-image.schema";
import { CreateCarImageDto } from "./dto/create-car-image.dto";
import { carModel } from "../car-model/schemas/car-model.schema";
import { UpdateCarModelDto } from "../car-model/dto/update-car-model.dto";
import * as uuid from "uuid";
import { UpdateCarImageDto } from "./dto/update-car-image.dto";



@Injectable()
export class carImageRepository{
  constructor(@InjectRepository(carImage) private carImageModel: Repository<carImage>
  ) {}


          // create
          async createCarImage(createCarImageDto: CreateCarImageDto): Promise<carImage| null>
          {
            return this.carImageModel.save(createCarImageDto);
          }




          // get all  car image
          async getCarImage(): Promise<carImage[]| null>
          {
             return  this.carImageModel.find({ });
          }



           // update car image
          async updateCarImage(carImageId: string, body: UpdateCarImageDto): Promise<carImage| null>
          {
            if (!uuid.validate(carImageId))
            {
              throw new NotFoundException('Invalid UUID Format');
            }

            const result = await this.carImageModel.findOne({ where: { id:carImageId}});
            if (!result)
            {
              throw new NotFoundException('car image not found');
            }
            result.image = body.image;
            const updatedResult = await this.carImageModel.save(result);
            return updatedResult;
          }





        // delete car image
          async deleteCarImage(carImageId:string): Promise<carImage| null>
          {
            if (!uuid.validate(carImageId))
            {
              throw new NotFoundException('Invalid UUID Format');
            }

            const result = await this.carImageModel.findOne({ where: { id:carImageId}});
            if (!result)
            {
              throw new NotFoundException('car image not found');
            }
            return await this.carImageModel.remove(result);

          }






}


import { Injectable, NotFoundException } from "@nestjs/common";
import {  Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { carType } from "./schemas/car-type.schema";
import { CreateCarTypeDto } from "./dto/create-car-type.dto";
import { UpdateCarTypeDto } from "./dto/update-car-type.dto";
import { validateUuid } from "../../decorators/uuid.decorators";


@Injectable()
export class CarTypeRepository{
  constructor(@InjectRepository(carType) private carTypeModel: Repository<carType>
  ) {}


        // create
        async createCarType(createCarTypeDto: CreateCarTypeDto): Promise<carType| null>
        {
          return this.carTypeModel.save(createCarTypeDto);
        }

        // get all  car types
        async getCarTypes(): Promise<carType[]| null>
        {
          return  this.carTypeModel.find({ });
        }



       // update  car types
        async updateCarTypes(cartypeId: string, body: UpdateCarTypeDto): Promise<carType| null>
        {
              validateUuid([cartypeId]);
              const result = await this.carTypeModel.findOne({ where: {  id:cartypeId}});
              if (!result)
              {
                throw new NotFoundException('Car  Type not found');
              }
              result.carType = body.carType;
              const updatedResult = await this.carTypeModel.save(result);
              return updatedResult;

        }


        // delete  car types
        async deleteCarTypes(cartypeId:string): Promise<carType| null>
        {
            validateUuid([cartypeId]);
            const result = await this.carTypeModel.findOne({ where: {  id:cartypeId}});
            if (!result)
            {
              throw new NotFoundException('Car  Type not found');
            }
            return await this.carTypeModel.remove(result);
        }




        // get  car types
        async getCarTypeById(cartypeId:string): Promise<carType| null>
        {
            validateUuid([cartypeId]);
            const result = await this.carTypeModel.findOne({ where: {  id:cartypeId}});
            return result
        }
}


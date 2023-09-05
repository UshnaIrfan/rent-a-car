import { Injectable, NotFoundException } from "@nestjs/common";
import {  Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { car } from "./schemas/car.schema";
import { validateUuid } from "../../decorators/uuid.decorators";
import { driver } from "../driver/schemas/driver.schema";
import { updateDriverDocumentsDto } from "../driver/dto/update-driver-documents.dto";
import path from "path";
import fs from "fs";
import { updateCarDto } from "./dto/update-car.dto";


@Injectable()
export class carRepository{
  constructor(@InjectRepository(car) private carModel: Repository<car>
  ) {}


      // create
        async createCar(CreateCarDto: any): Promise<car| null>
        {
          return this.carModel.save(CreateCarDto);
        }


        // Get car by car id
         async getCarByCarId(carId:string):Promise<car| null>
         {
            validateUuid([carId]);
            return   await  this.carModel.findOne({  where: { id:carId},
             relations:['pricing','carImage']
            });
        }





      // delete by car id
       async deleteCarById(carId: string):Promise<car| null>
       {
              validateUuid([carId]);
              const result = await this.carModel.findOne({ where: {  id:carId}});
              if (!result)
              {
                throw new NotFoundException('car not exist');
              }

              return await this.carModel.remove(result);

      }




        // Get car by user id
        async getCarByUserId(userId:string):Promise<car[]| null>
        {
            validateUuid([userId]);
           return  await this.carModel.find({  where: { userId}, relations:['pricing','carImage'] });
        }






      // Get car  history by user id and car id
      async getCarHistory(userId: string, carId: string):Promise<car[]| null>
      {
           validateUuid([userId,carId]);
           let whereConditions: any = {};
            if (userId || carId)
            {
              whereConditions = {
                userId: userId ?? undefined,
                id: carId ?? undefined,
              };
            }
           const results = await this.carModel.find({
           where: Object.keys(whereConditions).length !== 0 ? [whereConditions] : [],
           relations: carId ? ['pricing', 'carImage', 'booking'] : ['pricing', 'carImage'], });
           return results;
      }




        //update car by  id
        async updateCarByCarId(id: string, body: updateCarDto):Promise<car| null>
        {
            validateUuid([id]);
            const result = await this.carModel.findOne({ where: { id } });
            if (!result)
            {
              throw new NotFoundException('car not found');
            }

            for (const key in body)
            {
              if (body.hasOwnProperty(key))
              {
                result[key] = body[key];
              }
            }
            const updatedResult = await this.carModel.save(result);
            return updatedResult;
        }



  // // delete car history  by user id
      // async deleteCarHistory(userId: string):Promise<car[]| null>
      // {
      //       validateUuid([userId]);
      //       const result = await this.carModel.find({ where: {  userId:userId}});
      //       if (!result)
      //       {
      //         throw new NotFoundException('data not found');
      //       }
      //       return await this.carModel.remove(result);
      // }

}








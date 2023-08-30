import { Injectable, NotFoundException } from "@nestjs/common";
import { timeRepository } from "./time.repository";
import createTimeInterface from "./interfaces/create-time.interface";
import { time } from "./schemas/time.schema";
import { carModel } from "../car-model/schemas/car-model.schema";
import { UpdateCarModelDto } from "../car-model/dto/update-car-model.dto";
import { UpdateTimeDto } from "./dto/update-time.dto";

@Injectable()
export class TimeService {
  constructor(private readonly timeRepository:timeRepository) {}


      // create
      async createTime(createTimeInterface:createTimeInterface):Promise<time>
      {
          return  await this.timeRepository.createTime(createTimeInterface);
      }


        // get by time id
        async getTimeById(timeId:string):Promise<time>
        {
          return  await this.timeRepository.getTimeById(timeId);
        }




        // get all  car model
        async getTime ():Promise<time[]>
        {
            const result= await this.timeRepository.getTime();
            if (result.length==0)
            {
              throw new NotFoundException('car model not exist');
            }
            return  result
        }



        // update  car model
        async updateTime (timeId:string,body:UpdateTimeDto):Promise<{ time:time; message: string }>
        {
            const time = await this.timeRepository.updateTime(timeId,body);
            return { message: "updated successfully", time};
        }



        // delete  car model
        async deleteTime(timeId:string):Promise<{ time:time; message: string }>
        {
            const time= await this.timeRepository.deleteTime(timeId);
            return { message: "deleted successfully", time};
        }




}

import { Injectable, NotFoundException } from "@nestjs/common";
import {  Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { time } from "./schemas/time.schema";
import { CreateTimeDto } from "./dto/create-time.dto";
import { UpdateTimeDto } from "./dto/update-time.dto";
import { validateUuid } from "../../decorators/uuid.decorators";



@Injectable()
export class timeRepository{
  constructor(@InjectRepository(time) private timeModel: Repository<time>
  ) {}


      // create
      async createTime(createTimeDto: CreateTimeDto):Promise<time| null>
      {
         return  await this.timeModel.save(createTimeDto);
      }



      // get by time id
      async getTimeById(timeId: string):Promise<time| null>
      {
          validateUuid(timeId);
          const result = await this.timeModel.findOne({ where: {  id:timeId}});
          return  result
      }





        // get all  car model
        async getTime():Promise<time[]| null>
        {
          return  this.timeModel.find({ });
        }



        // update  car model
        async updateTime(timeId: string, body: UpdateTimeDto): Promise<time| null>
        {
            validateUuid(timeId);
            const result = await this.timeModel.findOne({ where: { id:timeId}});
            if (!result)
            {
              throw new NotFoundException('time not found');
            }
            result.time = body.time;
            const updatedResult = await this.timeModel.save(result);
            return updatedResult;
        }





        // delete  car model
        async deleteTime(timeId:string): Promise<time| null>
        {
            validateUuid(timeId);
            const result = await this.timeModel.findOne({ where: { id:timeId}});
            if (!result)
            {
              throw new NotFoundException('time not found');
            }
            return await this.timeModel.remove(result);
        }





}


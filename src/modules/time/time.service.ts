import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { timeRepository } from "./time.repository";
import createTimeInterface from "./interfaces/create-time.interface";
import { time } from "./schemas/time.schema";
import { UpdateTimeDto } from "./dto/update-time.dto";

@Injectable()
export class TimeService {
  constructor(private readonly timeRepository:timeRepository) {}


      // create
      async createTime(createTimeInterface:createTimeInterface):Promise<time>
      {

          const result= await this.timeRepository.findTime(createTimeInterface.time);
          if (result)
          {
            throw new ConflictException('This time already exists');
          }
          return  await this.timeRepository.createTime(createTimeInterface);
      }


        // get by time id
        async getTimeById(timeId:string):Promise<time>
        {
          return  await this.timeRepository.getTimeById(timeId);
        }




       // get time
        async getTime ():Promise<time[]>
        {
            const result= await this.timeRepository.getTime();
            if (result.length==0)
            {
              throw new NotFoundException('car model not exist');
            }
            return  result
        }



       // update  time
        async updateTime (timeId:string,body:UpdateTimeDto):Promise<{ time:time; message: string }>
        {
            const time = await this.timeRepository.updateTime(timeId,body);
            return { message: "updated successfully", time};
        }



       // delete  time
        async deleteTime(timeId:string):Promise<{ time:time; message: string }>
        {
            const time= await this.timeRepository.deleteTime(timeId);
            return { message: "deleted successfully", time};
        }



        // get by times by ids
        async getTimesById(timeIds:string[]):Promise<time[]| null>
        {
          return  await this.timeRepository.getTimesById(timeIds);
        }

}

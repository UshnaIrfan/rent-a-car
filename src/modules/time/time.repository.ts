import { Injectable, NotFoundException } from "@nestjs/common";
import { In, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { time } from "./schemas/time.schema";
import { CreateTimeDto } from "./dto/create-time.dto";
import { UpdateTimeDto } from "./dto/update-time.dto";
import { validateUuid } from "../../pipes/uuid.validator.pipe";



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
          validateUuid([timeId]);
          const result = await this.timeModel.findOne({ where: {  id:timeId}});
          return  result
      }





       // get time
        async getTime():Promise<time[]| null>
        {
          return  this.timeModel.find({ });
        }



       // update  time
        async updateTime(timeId: string, body: UpdateTimeDto): Promise<time| null>
        {
            validateUuid([timeId]);
            const result = await this.timeModel.findOne({ where: { id:timeId}});
            if (!result)
            {
              throw new NotFoundException('time not found');
            }
            result.time = body.time;
            const updatedResult = await this.timeModel.save(result);
            return updatedResult;
        }





       // delete  time
        async deleteTime(timeId:string): Promise<time| null>
        {
            validateUuid([timeId]);
            const result = await this.timeModel.findOne({ where: { id:timeId}});
            if (!result)
            {
              throw new NotFoundException('time not found');
            }
            return await this.timeModel.remove(result);
        }



        //find time by name
        async findTime(time: string):Promise<time| null>
        {
          return  await this.timeModel.findOne({ where: { time}});
        }



      // get by time id
      async getTimesById(timeIds: string[]):Promise<time[]| null>
      {
        validateUuid(timeIds);
        const result = await this.timeModel.find({ where: {id:In(timeIds)}});
        return  result
      }



}


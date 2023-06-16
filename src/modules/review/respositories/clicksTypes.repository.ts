import { Injectable} from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {clicksTypes} from "../schemas/create-click-types.schema";
import {createClicksTypesDto} from "../dto/create-click-types.dto";

@Injectable()
export class clicksTypesRepository{
  constructor(
    @InjectRepository(clicksTypes) private clickModel: Repository<clicksTypes>,
  ){}


       // create click types
       async createClicks(clicksReview:createClicksTypesDto):Promise<clicksTypes| null>
       {
          return this.clickModel.save(clicksReview);
       }



       // find by individual type
        async findByType(type:string):Promise<clicksTypes| null>
        {
            return this.clickModel.findOne({ where: { type}, });
        }


}



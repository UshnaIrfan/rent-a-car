import { Injectable} from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {clicks} from "../schemas/create-clicks-titles.schema";
import {clicksTypes} from "../schemas/create-click-types.schema";
import {createClicksTitlesDto} from "../dto/create-clicks-titles.dto";


@Injectable()
export class clicksRepository{
  constructor(
    @InjectRepository(clicks) private clickModel: Repository<clicks>,
  ){}


      // Find all slugs
      async getAllReviewsTitle():Promise<clicks[]|null>
      {
           return this.clickModel.find();
      }







      // find by individual slug
      async findBySlug(slug:string):Promise<clicks| null>
      {
         return this.clickModel.findOne({
           where: { slug},
         });
      }




     // create click slug
     async createClicks(clicksReview:createClicksTitlesDto): Promise<clicks| null>
     {
       return this.clickModel.save(clicksReview);
     }



     // get  review slugs associated with  review types
     async getClickAssociatedTypes(id: string):Promise<clicks | null>
     {
        return this.clickModel.findOne({
           where: { id },
          relations: ['clicksTypes'],
        });
     }


}


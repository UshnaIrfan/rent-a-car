import { Injectable} from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {clicksTypes} from "../schemas/create-click-types.schema";
import {createClickTypesDto} from "../dto/create-click-types.dto";

@Injectable()
export class clicksTypesRepository{
  constructor(
    @InjectRepository(clicksTypes) private clickTypesModel: Repository<clicksTypes>,
  ){}



      // create clicked types
     async createClicksTypes(body: createClickTypesDto):Promise<clicksTypes|null>
     {
         return this.clickTypesModel.save(body);
     }




     // find all types
     async getAllReviewsTypes():Promise<clicksTypes[]|null>
     {
        return this.clickTypesModel.find();
     }



      // find by individual type name
      async findByType(type:string):Promise<clicksTypes| null>
      {
          return this.clickTypesModel.findOne({
            where: { type },
         });
      }



     //find by individual type ID
     async  getByTypeId(id: string):Promise<clicksTypes| null>
     {
        return this.clickTypesModel.findOne({
          where: { id},
        });
     }




      // create click types( many to many relation)
      // async createClicksTypes(body: createClickTypesDto):Promise<clicksTypes|null>
      // {
      //  const types = await this.clickTypesModel.create();
      //  types.type = body.type;
      //  await this.clickTypesModel.save(types);
      //  return  types
      // }



      // create click types with associated title
      // async creatClickTypes(body:clicksTypes): Promise<clicksTypes | null>
      // {
      //   return this.clickTypesModel.save(body);
      // }





}


import { Injectable} from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { OrderByCondition, Repository } from "typeorm";
import {clicksTitle} from "../schemas/create-clicks-titles.schema";
import {createClicksTitlesDto} from "../dto/create-clicks-titles.dto";

@Injectable()
export class clicksTitlesRepository{
  constructor(
    @InjectRepository(clicksTitle) private clickTypesModel: Repository<clicksTitle>,
  ){}



       // create clicked title
       async createClicksTypes(body: createClicksTitlesDto):Promise<clicksTitle|null>
       {
           return this.clickTypesModel.save(body);
       }



       // find all title
       async getAllReviewsTitle(): Promise<clicksTitle[] | null>
       {
           const orderBy: OrderByCondition = {
           'type': 'DESC',
           'slug':'ASC'
         };
        const result = await this.clickTypesModel.find({ order: orderBy, select: ['id', 'slug', 'title', 'type','imageName']});
        return result;
       }





        // find by individual title  id
        async findByTitle(id:string):Promise<clicksTitle| null>
        {
            return this.clickTypesModel.findOne({ where: { id }});
        }




       //find by slug
       async findBySlug(slug:string):Promise<clicksTitle| null>
       {
         return this.clickTypesModel.findOne({ where: { slug }, });
       }




}

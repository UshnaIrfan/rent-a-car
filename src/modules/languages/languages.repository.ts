import { Injectable } from "@nestjs/common";
import {  Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { languages } from "./schemas/languages.schema";
import { CreateLanguageDto } from "./dto/create-language.dto";
import { car } from "../car/schemas/car.schema";
import { validateUuid } from "../../decorators/uuid.decorators";


@Injectable()
export class languagesRepository{
  constructor(@InjectRepository(languages) private languagesModel: Repository<languages>
  ) {}


      // create
      async createLanguages(createLanguageDto: CreateLanguageDto):Promise<languages| null>
      {
        return this.languagesModel.save(createLanguageDto);
      }



      // get all  Languages
      async getLanguages():Promise<languages[]| null>
      {
        return  this.languagesModel.find({ });
      }



       // find language by id
        async getLanguageById(id:string):Promise<languages| null>
        {
          validateUuid([id]);
          return  await this.languagesModel.findOne({  where: { id}});
        }





}


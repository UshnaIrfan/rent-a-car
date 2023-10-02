import { Injectable, NotFoundException } from "@nestjs/common";
import {  Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { languages } from "./schemas/languages.schema";
import { CreateLanguageDto } from "./dto/create-language.dto";
import { validateUuid } from "../../pipes/uuid.validator.pipe";
import { UpdateLanguageDto } from "./dto/update-language.dto";


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




      //find languages by name
      async findLanguageByName(languages: string): Promise<languages| null>
      {
        return  await this.languagesModel.findOne({ where: { languages}});
      }



      // delete  language
      async deleteLanguage(languageId:string): Promise<languages| null>
      {
          validateUuid([languageId]);
          const result = await this.languagesModel.findOne({ where: { id:languageId}});
          if (!result)
          {
            throw new NotFoundException('not found');
          }
          return await this.languagesModel.remove(result);
      }





      // update language
      async updateLanguage(languageId: string, body: UpdateLanguageDto): Promise<languages| null>
      {
          validateUuid([languageId]);
          const result = await this.languagesModel.findOne({ where: { id:languageId}});
          if (!result)
          {
            throw new NotFoundException('not found');
          }
          result.languages = body.languages;
          const updatedResult = await this.languagesModel.save(result);
          return updatedResult;
      }

}


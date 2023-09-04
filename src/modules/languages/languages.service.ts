import { Injectable, NotFoundException } from "@nestjs/common";
import createLanguagesInterface from "./interfaces/create-languages.interface";
import { languages } from "./schemas/languages.schema";
import { languagesRepository } from "./languages.repository";

@Injectable()
export class LanguagesService {
  constructor(private readonly LanguagesRepository:languagesRepository) {}

        // Create
        async createLanguages(createLanguagesInterface:createLanguagesInterface):Promise<languages>
        {
          return  await this.LanguagesRepository.createLanguages(createLanguagesInterface);
        }



        // get all  Languages
        async getLanguages ():Promise<languages[]>
        {
            const result= await this.LanguagesRepository.getLanguages();
            if (result.length==0)
            {
              throw new NotFoundException('data not found');
            }
            return  result
        }


        //find language by id
        async getLanguageById (id:string):Promise<languages>
        {
            const result= await this.LanguagesRepository.getLanguageById(id);
            return  result;
        }



}

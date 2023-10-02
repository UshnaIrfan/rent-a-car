import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import createLanguagesInterface from "./interfaces/create-languages.interface";
import { languages } from "./schemas/languages.schema";
import { languagesRepository } from "./languages.repository";
import { UpdateCountryDto } from "../country/dto/update-country.dto";
import { UpdateLanguageDto } from "./dto/update-language.dto";

@Injectable()
export class LanguagesService {
  constructor(private readonly LanguagesRepository:languagesRepository) {}

        // Create
        async createLanguages(createLanguagesInterface:createLanguagesInterface):Promise<languages>
        {
          const result = await this.LanguagesRepository.findLanguageByName(createLanguagesInterface.languages);
          if (result)
          {
            throw new ConflictException('This language already exists');
          }
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




        // delete  language
        async deleteLanguage(languageId:string):Promise<{ languages:languages; message: string }>
        {
          const languages= await this.LanguagesRepository.deleteLanguage(languageId);
          return { message: "deleted successfully", languages};
        }



        // update language
        async updateLanguage (languageId:string,body:UpdateLanguageDto):Promise<{ languages:languages; message: string }>
        {
          const languages = await this.LanguagesRepository.updateLanguage(languageId,body);
          return { message: "updated successfully", languages};
        }

}

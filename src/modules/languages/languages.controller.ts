import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LanguagesService } from './languages.service';
import { CreateLanguageDto } from './dto/create-language.dto';
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { languages } from "./schemas/languages.schema";


@ApiTags('languages')
@Controller('languages')
export class LanguagesController {
  constructor(private readonly languagesService: LanguagesService) {}


     // Create
      @ApiBody({type:CreateLanguageDto})
      @Post('create')
      async createLanguages(@Body() createLanguageDto: CreateLanguageDto):Promise<languages>
      {
        return this.languagesService.createLanguages(createLanguageDto);
      }


      // get all  Languages
      @Get('all')
      async  getLanguages():Promise<languages[]>
      {
        return this.languagesService.getLanguages();
      }



}

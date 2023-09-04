import { Module } from '@nestjs/common';
import { LanguagesService } from './languages.service';
import { LanguagesController } from './languages.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { languages } from "./schemas/languages.schema";
import { languagesRepository } from "./languages.repository";

@Module({
  imports: [TypeOrmModule.forFeature([languages])],
  controllers: [LanguagesController],
  providers: [languagesRepository,LanguagesService],
})
export class LanguagesModule {}

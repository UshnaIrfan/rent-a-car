import { Injectable, NotFoundException } from "@nestjs/common";
import {  Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { year } from "./schemas/year.schema";
import { CreateYearDto } from "./dto/create-year.dto";
import { updateDriverDocumentsDto } from "../driver/dto/update-driver-documents.dto";
import * as uuid from "uuid";
import path from "path";
import fs from "fs";
import { UpdateBaggageOptionDto } from "../baggage-option/dto/update-baggage-option.dto";
import { UpdateYearDto } from "./dto/update-year.dto";


@Injectable()
export class yearRepository{
  constructor(@InjectRepository(year) private yearModel: Repository<year>
  ) {}


      // create
      async createYear(createYearDto: CreateYearDto): Promise<year| null>
      {
        return this.yearModel.save(createYearDto);
      }



      // get all users
      async getAllCarYear(): Promise<year[]| null>
      {
        return  this.yearModel.find({ });
      }




       // update  car year
        async updateCarYear(yearId: string, body: UpdateYearDto)
        {
          if (!uuid.validate(yearId))
          {
            throw new NotFoundException('Invalid UUID Format');
          }

          const result = await this.yearModel.findOne({ where: {  id:yearId}});
          if (!result)
          {
            throw new NotFoundException('car year not found');
          }

          result.year = body.year;

          const updatedResult = await this.yearModel.save(result);
          return updatedResult;

        }


        // delete  car year
        async deleteCarYear(yearId:string)
        {
              if (!uuid.validate(yearId))
              {
                throw new NotFoundException('Invalid UUID Format');
              }

              const result = await this.yearModel.findOne({ where: {  id:yearId}});
              if (!result)
              {
                throw new NotFoundException('car year not found');
              }
              return await this.yearModel.remove(result);

        }
}


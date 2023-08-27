import { Injectable } from '@nestjs/common';
import { CreateYearDto } from './dto/create-year.dto';
import { UpdateYearDto } from './dto/update-year.dto';
import createCarInterface from "../car/interfaces/create-car.interface";
import createYearInterface from "./interfaces/create-year.interface";
import { yearRepository } from "./year.repository";
import { driver } from "../driver/schemas/driver.schema";
import { year } from "./schemas/year.schema";
import { updateDriverDocumentsDto } from "../driver/dto/update-driver-documents.dto";

@Injectable()
export class YearService {
  constructor(private readonly yearRepository:yearRepository) {}

        // create
        async createYear(createYearInterface:createYearInterface)
        {
            return  await this.yearRepository.createYear(createYearInterface);
        }


        // get all  car year
        async getAllCarYear (): Promise<year[]| null>
        {
          return  await this.yearRepository.getAllCarYear();
        }


     // update  car year
      async updateCarYear (yearId:string,body:UpdateYearDto)
      {
        return  await this.yearRepository.updateCarYear(yearId,body);
      }



          // delete  car year
          async deleteCarYear(yearId:string)
          {
              return  await this.yearRepository.deleteCarYear(yearId);
          }

}

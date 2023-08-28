import { Injectable, NotFoundException } from "@nestjs/common";
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
          const result= await this.yearRepository.getAllCarYear();
          if (result.length==0)
          {
            throw new NotFoundException('year not exist');
          }
          return  result
        }


         // update  car year
          async updateCarYear (yearId:string,body:UpdateYearDto):Promise<{ year:year; message: string }>
          {
              const  year= await this.yearRepository.updateCarYear(yearId,body);
              return { message: "updated successfully", year};
          }



          // delete  car year
          async deleteCarYear(yearId:string):Promise<{ year:year; message: string }>
          {
              const  year= await this.yearRepository.deleteCarYear(yearId);
              return { message: "deleted successfully", year};
          }



            // get car year
            async getCarYearById(yearId:string):Promise<year| null>
            {
              return  await this.yearRepository.getCarYearById(yearId);
            }

}

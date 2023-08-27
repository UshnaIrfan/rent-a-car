import { Injectable } from '@nestjs/common';
import createDriverOptionInterface from "./interfaces/create-driver-option.interface";
import { driverOptionRepository } from "./driver-option.repository";
import { driverOption } from "./schemas/driver-option.schema";
import { updateDriverDocumentsDto } from "../driver/dto/update-driver-documents.dto";
import { UpdateDriverOptionDto } from "./dto/update-driver-option.dto";

@Injectable()
export class DriverOptionService {

  constructor(private readonly driverOptionRepository:driverOptionRepository) {}



        // create
        async createDriverOption(driverOptionInterface:createDriverOptionInterface)
        {
          return  await this.driverOptionRepository.createDriverOption(driverOptionInterface);
        }


         // get all  driver  Option
        async getDriverOption ():Promise<driverOption[]>
        {
          return  await this.driverOptionRepository.getDriverOption();
        }



       // update  driver  Option
        async updateDriverOptionById (driverOptionId:string,body:UpdateDriverOptionDto)
        {
          return  await this.driverOptionRepository.updateDriverOptionById(driverOptionId,body);
        }


      // delete  driver  Option
      async deleteDriverOption(driverOptionId:string)
      {
        return  await this.driverOptionRepository.deleteDriverOption(driverOptionId);
      }
}

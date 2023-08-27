import { Injectable, NotFoundException } from "@nestjs/common";
import {  Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateDriverOptionDto } from "./dto/create-driver-option.dto";
import { driverOption } from "./schemas/driver-option.schema";
import { updateDriverDocumentsDto } from "../driver/dto/update-driver-documents.dto";
import * as uuid from "uuid";
import path from "path";
import fs from "fs";
import { UpdateBaggageOptionDto } from "../baggage-option/dto/update-baggage-option.dto";
import { UpdateDriverOptionDto } from "./dto/update-driver-option.dto";


@Injectable()
export class driverOptionRepository{
  constructor(@InjectRepository(driverOption) private driverOptionModel: Repository<driverOption>
  ) {}


        // create
        async createDriverOption(CreateDriverOptionDto: CreateDriverOptionDto): Promise<driverOption| null>
        {
          return this.driverOptionModel.save(CreateDriverOptionDto);
        }



        // get all  driver  Option
        async getDriverOption(): Promise<driverOption[]| null>
        {
          return  this.driverOptionModel.find({ });
        }




      // update  driver  Option
        async updateDriverOptionById(driverOptionId: string, body: UpdateDriverOptionDto)
        {
          if (!uuid.validate(driverOptionId))
          {
            throw new NotFoundException('Invalid UUID Format');
          }

          const result = await this.driverOptionModel.findOne({ where: {id:driverOptionId}});
          if (!result)
          {
            throw new NotFoundException('Driver Option not found');
          }

          result.driverOption = body.driverOption;

          const updatedResult = await this.driverOptionModel.save(result);
          return updatedResult;

        }


        // delete  driver  Option
        async deleteDriverOption(driverOptionId:string)
        {
            if (!uuid.validate(driverOptionId))
            {
              throw new NotFoundException('Invalid UUID Format');
            }

            const result = await this.driverOptionModel.findOne({ where: {id:driverOptionId}});
            if (!result)
            {
              throw new NotFoundException('Driver Option not found');
            }
            return await this.driverOptionModel.remove(result);
        }
}


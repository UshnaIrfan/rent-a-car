import { Injectable, NotFoundException } from "@nestjs/common";
import {  Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateSeatsCapacityDto } from "./dto/create-seats-capacity.dto";
import { seatsCapacity } from "./schemas/seats-capacity.schema";
import { year } from "../year/schemas/year.schema";
import { updateDriverDocumentsDto } from "../driver/dto/update-driver-documents.dto";
import * as uuid from "uuid";
import path from "path";
import fs from "fs";
import { UpdateBaggageOptionDto } from "../baggage-option/dto/update-baggage-option.dto";
import { UpdateSeatsCapacityDto } from "./dto/update-seats-capacity.dto";


@Injectable()
export class seatsCapacityRepository{
  constructor(@InjectRepository(seatsCapacity) private seatsCapacityModel: Repository<seatsCapacity>
  ) {}


      // create
      async createSeatsCapacity(createSeatsCapacityDto: CreateSeatsCapacityDto): Promise<seatsCapacity| null>
      {
        return this.seatsCapacityModel.save(createSeatsCapacityDto);
      }



      // get all  seats  Capacity
      async getSeatsCapacity(): Promise<seatsCapacity[]| null>
      {
        return  this.seatsCapacityModel.find({ });
      }





  // update  seats  Capacity
      async updateSeatsCapacity(seatsCapacityId: string, body: UpdateSeatsCapacityDto)
      {
        if (!uuid.validate(seatsCapacityId))
        {
          throw new NotFoundException('Invalid UUID Format');
        }

        const result = await this.seatsCapacityModel.findOne({ where: {  id:seatsCapacityId}});
        if (!result)
        {
          throw new NotFoundException('Seats Capacity not found');
        }

        result.seatsCapacity = body.seatsCapacity;

        const updatedResult = await this.seatsCapacityModel.save(result);
        return updatedResult;

      }


     // delete  seats  Capacity
      async deleteSeatsCapacity(seatsCapacityId:string)
      {
            if (!uuid.validate(seatsCapacityId))
            {
              throw new NotFoundException('Invalid UUID Format');
            }

            const result = await this.seatsCapacityModel.findOne({ where: {  id:seatsCapacityId}});
            if (!result)
            {
              throw new NotFoundException('Seats Capacity not found');
            }
            return await this.seatsCapacityModel.remove(result);
      }

}


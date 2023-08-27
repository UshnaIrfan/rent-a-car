import { Injectable } from '@nestjs/common';
import createSeatsCapacityInterface from "./interfaces/create-seats-capacity.interface";
import { seatsCapacityRepository } from "./seats-capacity.repository";
import { year } from "../year/schemas/year.schema";
import { seatsCapacity } from "./schemas/seats-capacity.schema";
import { updateDriverDocumentsDto } from "../driver/dto/update-driver-documents.dto";
import { UpdateSeatsCapacityDto } from "./dto/update-seats-capacity.dto";



@Injectable()
export class SeatsCapacityService {
  constructor(private readonly seatsCapacityRepository:seatsCapacityRepository) {}


        // create
        async createSeatsCapacity(createSeatsCapacityInterface:createSeatsCapacityInterface)
        {
          return  await this.seatsCapacityRepository.createSeatsCapacity(createSeatsCapacityInterface);
        }



        // get all  seats  Capacity
        async getSeatsCapacity (): Promise<seatsCapacity[]>
        {
          return  await this.seatsCapacityRepository.getSeatsCapacity();
        }



      // update  seats  Capacity
      async updateSeatsCapacity (seatsCapacityId:string,body:UpdateSeatsCapacityDto)
      {
        return  await this.seatsCapacityRepository.updateSeatsCapacity(seatsCapacityId,body);
      }


      // delete  seats  Capacity
      async deleteSeatsCapacity(seatsCapacityId:string)
      {
        return  await this.seatsCapacityRepository.deleteSeatsCapacity(seatsCapacityId);
      }
}

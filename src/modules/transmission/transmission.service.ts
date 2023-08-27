import { Injectable } from '@nestjs/common';
import { CreateTransmissionDto } from './dto/create-transmission.dto';
import { UpdateTransmissionDto } from './dto/update-transmission.dto';
import { seatsCapacity } from "../seats-capacity/schemas/seats-capacity.schema";
import { UpdateSeatsCapacityDto } from "../seats-capacity/dto/update-seats-capacity.dto";
import createSeatsCapacityInterface from "./interfaces/create-transmission.interface";
import createTransmissionInterface from "./interfaces/create-transmission.interface";
import { transmissionRepository } from "./transmission.repository";
import { transmission } from "./schemas/transmission.schema";

@Injectable()
export class TransmissionService {
  constructor(private readonly transmissionRepository:transmissionRepository) {}


      // create
      async createTransmission(createTransmissionInterface:createTransmissionInterface):Promise<transmission>
      {
        return  await this.transmissionRepository.createTransmission(createTransmissionInterface);
      }



      // get all  transmission
      async getTransmission ():Promise<transmission[]>
      {
        return  await this.transmissionRepository.getTransmission();
      }




      // update  transmission
      async updateTransmission (transmissionId:string,body:UpdateTransmissionDto)
      {
        return  await this.transmissionRepository.updateTransmission(transmissionId,body);
      }


      // delete transmission
      async deleteTransmission(transmissionId:string)
      {
        return  await this.transmissionRepository.deleteTransmission(transmissionId);
      }
}

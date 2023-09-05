import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { UpdateTransmissionDto } from './dto/update-transmission.dto';
import createTransmissionInterface from "./interfaces/create-transmission.interface";
import { transmissionRepository } from "./transmission.repository";
import { transmission } from "./schemas/transmission.schema";

@Injectable()
export class TransmissionService {
  constructor(private readonly transmissionRepository:transmissionRepository) {}


      // create
      async createTransmission(createTransmissionInterface:createTransmissionInterface):Promise<transmission>
      {
          const result = await this.transmissionRepository.findTransmission(createTransmissionInterface.transmission);
          if (result)
          {
              throw new ConflictException('This transmission already exists');
          }
          return  await this.transmissionRepository.createTransmission(createTransmissionInterface);
      }



      // get all  transmission
      async getTransmission ():Promise<transmission[]>
      {
          const result= await this.transmissionRepository.getTransmission();
          if (result.length==0)
          {
            throw new NotFoundException('transmission not exist');
          }
          return  result
      }




      // update  transmission
      async updateTransmission (transmissionId:string,body:UpdateTransmissionDto):Promise<{ transmission:transmission; message: string }>
      {
          const  transmission= await this.transmissionRepository.updateTransmission(transmissionId,body);
          return { message: "updated successfully", transmission};
      }


      // delete transmission
      async deleteTransmission(transmissionId:string):Promise<{ transmission:transmission; message: string }>
      {
          const transmission= await this.transmissionRepository.deleteTransmission(transmissionId);
          return { message: " deleted successfully", transmission};
      }



      // get transmission
      async getCarTransmissionById(transmissionId:string):Promise<transmission>
      {
        return  await this.transmissionRepository.getCarTransmissionById(transmissionId);
      }
}

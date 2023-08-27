import { Injectable, NotFoundException } from "@nestjs/common";
import {  Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import * as uuid from "uuid";
import { transmission } from "./schemas/transmission.schema";
import { UpdateTransmissionDto } from "./dto/update-transmission.dto";
import { CreateTransmissionDto } from "./dto/create-transmission.dto";


@Injectable()
export class transmissionRepository{
  constructor(@InjectRepository(transmission) private transmissionModel: Repository<transmission>
  ) {}


      // create
      async createTransmission(createTransmissionDto: CreateTransmissionDto):Promise<transmission|null>
      {
        return this.transmissionModel.save(createTransmissionDto);
      }



      // get all  transmission
      async getTransmission():Promise<transmission[]|null>
      {
        return  this.transmissionModel.find({ });
      }





  // update  transmission
      async updateTransmission(transmissionId: string, body: UpdateTransmissionDto)
      {
        if (!uuid.validate(transmissionId))
        {
          throw new NotFoundException('Invalid UUID Format');
        }

        const result = await this.transmissionModel.findOne({ where: {  id:transmissionId}});
        if (!result)
        {
          throw new NotFoundException('transmission not found');
        }

        result.transmission = body.transmission;


        const updatedResult = await this.transmissionModel.save(result);
        return updatedResult;

      }



      // delete transmission
      async deleteTransmission(transmissionId:string)
      {
          if (!uuid.validate(transmissionId))
          {
            throw new NotFoundException('Invalid UUID Format');
          }

          const result = await this.transmissionModel.findOne({ where: {  id:transmissionId}});
          if (!result)
          {
            throw new NotFoundException('transmission not found');
          }
          return await this.transmissionModel.remove(result);

      }
}


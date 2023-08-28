import { Injectable, NotFoundException } from "@nestjs/common";
import {  Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateBaggageOptionDto } from "./dto/create-baggage-option.dto";
import { baggageOption } from "./schemas/baggage-option.schema";
import { updateDriverDocumentsDto } from "../driver/dto/update-driver-documents.dto";
import * as uuid from "uuid";
import path from "path";
import fs from "fs";
import { UpdateBaggageOptionDto } from "./dto/update-baggage-option.dto";


@Injectable()
export class baggageOptionRepository{
  constructor(@InjectRepository(baggageOption) private baggageOptionModel: Repository<baggageOption>
  ) {}


      // create
      async createBaggage(createBaggageOptionDto: CreateBaggageOptionDto): Promise<baggageOption| null>
      {
        return this.baggageOptionModel.save(createBaggageOptionDto);
      }


      // get all Baggage
      async getBaggageOption(): Promise<baggageOption[]| null>
      {
        return  this.baggageOptionModel.find({ });
      }


      // update  Baggage
      async updateBaggageOption(baggageId: string, body: UpdateBaggageOptionDto) :Promise<baggageOption| null>
      {
              if (!uuid.validate(baggageId))
              {
                throw new NotFoundException('Invalid UUID Format');
              }

              const result = await this.baggageOptionModel.findOne({ where: {  id:baggageId}});
              if (!result)
              {
                throw new NotFoundException('Baggage Option not found');
              }

               result.baggageOption = body.baggageOption;

              const updatedResult = await this.baggageOptionModel.save(result);
              return updatedResult;

      }





      // delete Baggage
      async deleteBaggageOption(baggageId:string)
      {
          if (!uuid.validate(baggageId))
          {
            throw new NotFoundException('Invalid UUID Format');
          }

          const result = await this.baggageOptionModel.findOne({ where: {  id:baggageId}});
          if (!result)
          {
            throw new NotFoundException('Baggage Option not found');
          }

          return await this.baggageOptionModel.remove(result);
      }



      // get Baggage
      async getCarBaggageOptionById(baggageId:string): Promise<baggageOption| null>
      {
          if (!uuid.validate(baggageId))
          {
            throw new NotFoundException('Invalid UUID Format');
          }

          const result = await this.baggageOptionModel.findOne({ where: {  id:baggageId}});
          return result
      }
}


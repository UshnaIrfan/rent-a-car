import { Injectable } from '@nestjs/common';
import createBaggageOptionInterface from "./interfaces/create-baggage-option.interface";
import { baggageOptionRepository } from "./baggage-option.repository";
import { baggageOption } from "./schemas/baggage-option.schema";
import { updateDriverDocumentsDto } from "../driver/dto/update-driver-documents.dto";
import { CreateBaggageOptionDto } from "./dto/create-baggage-option.dto";
import { UpdateBaggageOptionDto } from "./dto/update-baggage-option.dto";

@Injectable()
export class BaggageOptionService {
  constructor(private readonly baggageOptionRepository:baggageOptionRepository) {}


        // create
        async createBaggage(createBaggageOptionInterface:createBaggageOptionInterface)
        {
          return  await this.baggageOptionRepository.createBaggage(createBaggageOptionInterface);
        }


        // get all Baggage
        async getBaggageOption (): Promise<baggageOption[]>
        {
          return  await this.baggageOptionRepository.getBaggageOption();
        }


        // update  Baggage
        async updateBaggageOption (baggageId:string,body:UpdateBaggageOptionDto)
        {
          return  await this.baggageOptionRepository.updateBaggageOption(baggageId,body);
        }


        // delete Baggage
        async deleteBaggageOption (baggageId:string)
        {
          return  await this.baggageOptionRepository.deleteBaggageOption(baggageId);
        }




}

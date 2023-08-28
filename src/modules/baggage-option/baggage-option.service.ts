import { Injectable, NotFoundException } from "@nestjs/common";
import createBaggageOptionInterface from "./interfaces/create-baggage-option.interface";
import { baggageOptionRepository } from "./baggage-option.repository";
import { baggageOption } from "./schemas/baggage-option.schema";
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
          const  result= await this.baggageOptionRepository.getBaggageOption();
          if (result.length==0)
          {
            throw new NotFoundException('baggage option not exist');
          }
          return  result
        }


        // update  Baggage
        async updateBaggageOption (baggageId:string,body:UpdateBaggageOptionDto):Promise<{ baggageOption:baggageOption; message: string }>
        {
          const  baggageOption= await this.baggageOptionRepository.updateBaggageOption(baggageId,body);
          return { message: "updated successfully", baggageOption};

        }


        // delete Baggage
        async deleteBaggageOption (baggageId:string):Promise<{ baggageOption:baggageOption; message: string }>
        {
            const baggageOption= await this.baggageOptionRepository.deleteBaggageOption(baggageId);
            return { message: "deleted successfully", baggageOption};
        }



        // get Baggage
        async getCarBaggageOptionById (baggageId:string): Promise<baggageOption>
        {
          return  await this.baggageOptionRepository.getCarBaggageOptionById(baggageId);

        }


}

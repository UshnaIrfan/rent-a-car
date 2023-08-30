import { Injectable, NotFoundException } from "@nestjs/common";
import {  Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateBaggageOptionDto } from "./dto/create-baggage-option.dto";
import { baggageOption } from "./schemas/baggage-option.schema";
import { UpdateBaggageOptionDto } from "./dto/update-baggage-option.dto";
import { validateUuid } from "../../decorators/uuid.decorators";


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
              validateUuid(baggageId);
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
          validateUuid(baggageId);
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
          validateUuid(baggageId);
          const result = await this.baggageOptionModel.findOne({ where: {  id:baggageId}});
          return result
      }
}


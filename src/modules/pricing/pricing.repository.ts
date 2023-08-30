import { Injectable, NotFoundException } from "@nestjs/common";
import {  Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreatePricingDto } from "./dto/create-pricing.dto";
import { pricing } from "./schemas/pricing.schema";
import * as uuid from "uuid";
import { UpdatePricingDto } from "./dto/update-pricing.dto";


@Injectable()
export class pricingRepository{
  constructor(@InjectRepository(pricing) private pricingModel: Repository<pricing>
  ) {}


        // create
        async createPricing(createPricingDto: CreatePricingDto): Promise<pricing| null>
        {
          return this.pricingModel.save(createPricingDto);
        }




        // get all  pricing
        async getPricing(): Promise<pricing[]| null>
        {
          return  this.pricingModel.find({ });
        }



        // update  pricing
        async updatePricing(pricingId: string, body: UpdatePricingDto): Promise<pricing| null>
        {
            if (!uuid.validate(pricingId))
            {
              throw new NotFoundException('Invalid UUID Format');
            }

            const result = await this.pricingModel.findOne({ where: { id:pricingId}});
            if (!result)
            {
              throw new NotFoundException('pricing not found');
            }
            result.price = body.price;
            const updatedResult = await this.pricingModel.save(result);
            return updatedResult;
        }





        // delete  pricing
        async deletePricing(pricingId:string): Promise<pricing| null>
        {
            if (!uuid.validate(pricingId))
            {
              throw new NotFoundException('Invalid UUID Format');
            }

            const result = await this.pricingModel.findOne({ where: { id:pricingId}});
            if (!result)
            {
              throw new NotFoundException('pricing not found');
            }
            return await this.pricingModel.remove(result);

        }


}


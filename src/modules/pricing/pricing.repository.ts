import { Injectable, NotFoundException } from "@nestjs/common";
import {  Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreatePricingDto } from "./dto/create-pricing.dto";
import { pricing } from "./schemas/pricing.schema";
import { UpdatePricingDto } from "./dto/update-pricing.dto";
import { validateUuid } from "../../pipes/uuid.validator.pipe";


@Injectable()
export class pricingRepository{
  constructor(@InjectRepository(pricing) private   pricingModel: Repository<pricing>
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

            validateUuid([pricingId]);
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
            validateUuid([pricingId]);
            const result = await this.pricingModel.findOne({ where: { id:pricingId}});
            if (!result)
            {
              throw new NotFoundException('pricing not found');
            }
            return await this.pricingModel.remove(result);

        }



        // get  pricing by name
        async pricingByName(price:string)
        {
          return  this.pricingModel.find({where:{price} });
        }



      // get  pricing by id
      async getPricingById(pricingId: string): Promise<pricing| null>
      {
          validateUuid([pricingId]);
         return  await this.pricingModel.findOne({ where: { id:pricingId}});
      }


}


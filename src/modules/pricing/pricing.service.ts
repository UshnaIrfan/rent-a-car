import { Injectable, NotFoundException } from "@nestjs/common";
import { pricingRepository } from "./pricing.repository";
import createPricingInterface from "./interfaces/create-pricing.interface";
import { pricing } from "./schemas/pricing.schema";
import { TimeService } from "../time/time.service";
import { CarService } from "../car/car.service";
import { UpdatePricingDto } from "./dto/update-pricing.dto";

@Injectable()
export class pricingService {
  constructor(private  pricingRepository:pricingRepository,
              private  readonly timeService : TimeService,
              private   readonly carService : CarService,

  ) {}


      // create
      async createPricing(createPricingInterface:createPricingInterface,userId:string):Promise<pricing>
      {
          const carId= await this.carService.getCarByCarId(createPricingInterface.carId);
          if(!carId)
          {
            throw new NotFoundException('invalid car id');
          }
          const timeId= await this.timeService.getTimeById(createPricingInterface.timeId);
          if(!timeId)
          {
            throw new NotFoundException('invalid time id');
          }
          const carPricing: createPricingInterface & { userId: string } = {
            ...createPricingInterface,
            userId: userId,
          };
          return  await this.pricingRepository.createPricing(carPricing);
      }





        // get all  pricing
        async getPricing (): Promise<pricing[]>
        {
            const result= await this.pricingRepository.getPricing();
            if (result.length==0)
            {
              throw new NotFoundException('pricing not exist');
            }
            return  result
        }



        // update  pricing
        async updatePricing (pricingId:string,body:UpdatePricingDto):Promise<{ pricing:pricing; message: string }>
        {
            const pricing = await this.pricingRepository.updatePricing(pricingId,body);
            return { message: "updated successfully", pricing};
        }



        // delete  pricing
        async deletePricing(pricingId:string):Promise<{ pricing:pricing; message: string }>
        {
            const pricing= await this.pricingRepository.deletePricing(pricingId);
            return { message: "deleted successfully", pricing};
        }




      // get  pricing by name
      async pricingByName (price:string)
      {
        const result= await this.pricingRepository.pricingByName(price);
        return  result
      }


      // get  pricing by id
      async getPricingById (pricingId:string):Promise<pricing>
      {
        const pricing = await this.pricingRepository.getPricingById(pricingId);
        if (!pricing) {
          throw new NotFoundException('pricing not found');
        }
        return pricing
      }





}

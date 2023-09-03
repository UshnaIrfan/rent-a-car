import { Injectable, NotFoundException } from "@nestjs/common";
import { pricingRepository } from "./pricing.repository";
import createPricingInterface from "./interfaces/create-pricing.interface";
import { pricing } from "./schemas/pricing.schema";
import { TimeService } from "../time/time.service";
import { CarService } from "../car/car.service";
import { UpdatePricingDto } from "./dto/update-pricing.dto";

@Injectable()
export class PricingService {
  constructor(private readonly pricingRepository:pricingRepository,
              private  timeService : TimeService,
              private  carService : CarService,


  ) {}


      // create
      async createPricing(createPricingInterface:createPricingInterface):Promise<pricing>
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
        return  await this.pricingRepository.createPricing(createPricingInterface);
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



}

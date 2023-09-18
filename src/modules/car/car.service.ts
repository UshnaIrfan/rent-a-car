import {  Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import createCarInterface from "./interfaces/create-car.interface";
import { carRepository } from "./car.repository";
import { BrandService } from "../brand/brand.service";
import { CarModelService } from "../car-model/car-model.service";
import { YearService } from "../year/year.service";
import { ColorService } from "../color/color.service";
import { TransmissionService } from "../transmission/transmission.service";
import { CarTypeService } from "../car-type/car-type.service";
import { BaggageOptionService } from "../baggage-option/baggage-option.service";
import { SeatsCapacityService } from "../seats-capacity/seats-capacity.service";
import { DriverOptionService } from "../driver-option/driver-option.service";
import { car } from "./schemas/car.schema";
import { updateCarDto } from "./dto/update-car.dto";
import { UsersService } from "../users/users.service";
import {pricingService} from "../pricing/pricing.service";
import { pricingRepository } from "../pricing/pricing.repository";
import { TimeService } from "../time/time.service";

@Injectable()
export class CarService {
  constructor(private readonly CarRepository:carRepository,
              private brandService: BrandService,
              private  carModelService : CarModelService,
              private  yearService : YearService,
              private  colorService : ColorService,
              private  carTypeService : CarTypeService,
              private  transmissionService : TransmissionService,
              private  baggageOptionService : BaggageOptionService,
              private  seatsCapacityService : SeatsCapacityService,
              private  driverOptionService : DriverOptionService,

              // private readonly pricingRepository: pricingRepository,
              // private readonly timeService: TimeService,
             //   private  readonly pricingService : pricingService

  ) {}



      // create
      async createCar(CreateCarInterface:createCarInterface,userId:string): Promise<car>
      {
          const carBrand= await this.brandService.getCarBrandById(CreateCarInterface.brandId);
          if(!carBrand)
          {
            throw new NotFoundException('car brand not exist');
          }
          const carModel= await this.carModelService.getCarModelById(CreateCarInterface.modelId);
          if(!carModel)
          {
            throw new NotFoundException('car model not exist');
          }
          const carYear= await this.yearService.getCarYearById(CreateCarInterface.yearId);
          if(!carYear)
          {
            throw new NotFoundException('car year not exist');
          }

          const carColor= await this.colorService.getCarColorById(CreateCarInterface.colorId);
          if(!carColor)
          {
            throw new NotFoundException('car color not exist');
          }

          const carTransmission= await this.transmissionService.getCarTransmissionById(CreateCarInterface.transmissionId);
          if(!carTransmission)
          {
            throw new NotFoundException('car Transmission not exist');
          }
          const carType= await this.carTypeService.getCarTypeById(CreateCarInterface.carTypeId);
          if(!carType)
          {
            throw new NotFoundException('car type not exist');
          }

          const carBaggageOption= await this.baggageOptionService.getCarBaggageOptionById(CreateCarInterface.baggageOptionId);
          if(!carBaggageOption)
          {
            throw new NotFoundException('car baggage option not exist');
          }
          const carSeatsCapacity= await this.seatsCapacityService.getCarSeatsCapacityById(CreateCarInterface.seatsCapacityId);
          if(!carSeatsCapacity)
          {
            throw new NotFoundException('car seats capacity not exist');
          }

          const carDriverOption= await this.driverOptionService.getCarDriverOptionById(CreateCarInterface.driverOptionId);
          if(!carDriverOption)
          {
            throw new NotFoundException('car driver option not exist');
          }


          const carData: createCarInterface & { userId: string } = {
            ...CreateCarInterface,
            userId: userId,

          };

          return  await this.CarRepository.createCar(carData);
      }




       // Get car by car id
        async getCarByCarId (carId:string):Promise<car>
        {
          const result= await this.CarRepository.getCarByCarId(carId);
          if(!result)
          {
            throw new NotFoundException('data not found');
          }
          return  result;
        }



        // delete by car id
        async deleteCarById(carId):Promise<{ car:car; message: string }>
        {
            const car= await this.CarRepository.deleteCarById(carId);
            return { message: "deleted successfully",car:car};
        }




        // Get car by user id
        async getCarByUserId (userId:string):Promise<car[]>
        {
            const result= await this.CarRepository.getCarByUserId(userId);
            if (result.length==0)
            {
              throw new NotFoundException('user not exist');
            }
            return  result;
        }





        // Get car  history by user id and car id
        async getCarHistory (userId:string,carId:string):Promise<car[]>
        {
            const result= await this.CarRepository.getCarHistory(userId,carId);
            if (result.length==0)
            {
              throw new NotFoundException(' data not found');
            }
            return  result;
        }




        //update car by  id
          async updateCarByCarId (carId:string,body:updateCarDto):Promise<{ car:car; message: string }> {
          {
            const carBrand = await this.brandService.getCarBrandById(body.brandId);
            if (!carBrand) {
              throw new NotFoundException('car brand not exist');
            }
            const carModel = await this.carModelService.getCarModelById(body.modelId);
            if (!carModel) {
              throw new NotFoundException('car model not exist');
            }
            const carYear = await this.yearService.getCarYearById(body.yearId);
            if (!carYear) {
              throw new NotFoundException('car year not exist');
            }

            const carColor = await this.colorService.getCarColorById(body.colorId);
            if (!carColor) {
              throw new NotFoundException('car color not exist');
            }

            const carTransmission = await this.transmissionService.getCarTransmissionById(body.transmissionId);
            if (!carTransmission) {
              throw new NotFoundException('car Transmission not exist');
            }
            const carType = await this.carTypeService.getCarTypeById(body.carTypeId);
            if (!carType) {
              throw new NotFoundException('car type not exist');
            }

            const carBaggageOption = await this.baggageOptionService.getCarBaggageOptionById(body.baggageOptionId);
            if (!carBaggageOption) {
              throw new NotFoundException('car baggage option not exist');
            }
            const carSeatsCapacity = await this.seatsCapacityService.getCarSeatsCapacityById(body.seatsCapacityId);
            if (!carSeatsCapacity) {
              throw new NotFoundException('car seats capacity not exist');
            }

            const carDriverOption = await this.driverOptionService.getCarDriverOptionById(body.driverOptionId);
            if (!carDriverOption) {
              throw new NotFoundException('car driver option not exist');
            }
            const car = await this.CarRepository.updateCarByCarId(carId, body);
            return { message: "updated successfully", car };

          }

        }



      // // delete car history  by user id
      // async deleteCarHistory (userId:string):Promise<{ car:car[]; message: string }>
      // {
      //     const  car= await this.CarRepository.deleteCarHistory(userId);
      //     return { message: "deleted successfully",car:car};
      // }






      // search and get  car id for booking purpose
      async Search (carTypes:string,brands:string,transmission:string,color:string,minPrice:string,maxPrice:string)
      {
        const result= await this.CarRepository.Search(carTypes,brands,transmission,color,minPrice,maxPrice);
        if(result.length==0)
        {
           throw new NotFoundException('not any data exit according to  your criteria')
        }
        return  result
      }
}

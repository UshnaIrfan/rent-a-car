import {  Injectable, NotFoundException } from "@nestjs/common";
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
import { car } from "./schemas/car.schema";
import { updateCarDto } from "./dto/update-car.dto";
import { DriverService } from "../driver/driver.service";


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
              private  driverService : DriverService,

  ) {}



      // create
      async createCar(CreateCarInterface:createCarInterface,userId:string)
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

          const carData: createCarInterface & { userId: string } = {
            ...CreateCarInterface,
            userId: userId,

          };

          const  result = await this.CarRepository.createCar(carData);result.driverIds = [];
          const driverIDs = CreateCarInterface.driverIds;
          for (const driverID of driverIDs)
          {
            const car = await this.driverService.findDriverByDriverId(driverID);
            if (!car)
            {
              throw new NotFoundException('does not exist');
            }
            result.driverIds.push(car);
          }
          await this.CarRepository.driverCars(result);
          return { record: result };
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
              throw new NotFoundException('data not found');
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
            const car = await this.CarRepository.updateCarByCarId(carId, body);
            return { message: "updated successfully", car };

          }

        }





      // search and get  car id for booking purpose
      async Search (carTypes:string,brands:string,transmission:string,color:string,minPrice:string,maxPrice:string,area:string)
      {
          const result= await this.CarRepository.Search(carTypes,brands,transmission,color,minPrice,maxPrice,area);
          if(result.length==0)
          {
             throw new NotFoundException('not any data exit according to  your criteria')
          }
          return  result
      }




      // Get package  detail by car id
      async getPackageByCarId (carId:string):Promise<car>
      {
          const result= await this.CarRepository.getPackageByCarId(carId);
          if(!result)
          {
            throw new NotFoundException('data not found');
          }
          return  result;
      }




      // Get  driver  detail by car id
      async getDriverByCarId (carId:string):Promise<car>
      {
          const result= await this.CarRepository.getDriverByCarId(carId);
          if(!result)
          {
            throw new NotFoundException('data not found');
          }
          return  result;
      }




      // Get car by car id and set car booking status true
      async getCarByIdAndSet (carId:string):Promise<car>
      {
         return  await this.CarRepository.getCarByIdAndSet(carId);
      }










}

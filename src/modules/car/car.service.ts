import { Injectable, NotFoundException } from "@nestjs/common";
import createCarInterface from "./interfaces/create-car.interface";
import { carRepository } from "./car-repository";
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
  ) {}



      // create
      async createCar(CreateCarInterface:createCarInterface): Promise<car>
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
          return  await this.CarRepository.createCar(CreateCarInterface);
      }





}

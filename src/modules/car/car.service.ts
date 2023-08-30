import { Inject, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
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
import { jwtConstants } from "../auth/constants/constants";
import { Cache } from "cache-manager";
import { CACHE_MANAGER } from "@nestjs/common/cache";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "../users/users.service";



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
              private jwtService: JwtService,
              private usersService: UsersService,
              @Inject(CACHE_MANAGER) private cacheManager: Cache,



  ) {}



      // create
      async createCar(CreateCarInterface:createCarInterface,accessToken: string): Promise<car>
      {

          const decoded = await this.jwtService.verify(accessToken, { secret:jwtConstants.secret});
          const user = await this.usersService.getUserById(decoded.id)
          if(!user)
          {
            throw new  NotFoundException('invalid user')
          }

          const cachedToken = await this.cacheManager.get(accessToken);
          if (!cachedToken)
          {
            throw new UnauthorizedException('Token expired');
          }

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


          const carData: createCarInterface & { UserId: string } = {
            ...CreateCarInterface,
            UserId: decoded.id,

          };

          return  await this.CarRepository.createCar(carData);
      }




        // Get by car id
        async getCarById (carId:string):Promise<car>
        {
          const result= await this.CarRepository.getCarById(carId);
          if (!result)
          {
            throw new NotFoundException('car not exist');
          }
            return  result;
        }


}

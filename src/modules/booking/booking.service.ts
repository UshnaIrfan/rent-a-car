import { Inject, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import createBaggageOptionInterface from "./interfaces/create-booking.interface";
import createBookingInterface from "./interfaces/create-booking.interface";
import { bookingRepository } from "./booking.repository";
import { jwtConstants } from "../auth/constants/constants";
import { JwtService } from "@nestjs/jwt";
import { CACHE_MANAGER } from "@nestjs/common/cache";
import { Cache } from "cache-manager";
import { UsersService } from "../users/users.service";
import { CarService } from "../car/car.service";
import { driverRepository } from "../driver/driver.repository";
import { driver } from "../driver/schemas/driver.schema";
import { booking } from "./schemas/booking.schema";
import { LanguagesService } from "../languages/languages.service";

@Injectable()
export class BookingService {

  constructor(private readonly bookingRepository:bookingRepository,
              private jwtService: JwtService,
              @Inject(CACHE_MANAGER) private cacheManager: Cache,
              private usersService: UsersService,
              private readonly carService: CarService,
              private readonly languagesService: LanguagesService,
              private readonly DriverRepository:driverRepository,
  ) {}


    // create
    async createBooking(createBookingInterface:createBookingInterface,userId:string)
    {

          const language= await this.languagesService.getLanguageById(createBookingInterface.languageId);
          if(!language)
          {
            throw new NotFoundException('language not found');
          }

          const car= await this.carService.getCarByCarId(createBookingInterface.carId);
          if(!car)
          {
            throw new NotFoundException('car  not exist');
          }


          // const driver=await this.DriverRepository.getDriverById(createBookingInterface.driverId)
          // if(!driver)
          // {
          //   throw new NotFoundException('driver not exist');
          // }
          const bookingData: createBookingInterface & { userId: string } = {
            ...createBookingInterface,
            userId: userId,

          };

          return  await this.bookingRepository.createBooking(bookingData);
    }




      // get booking data by user id
      async getBookingDataByUserId (userId:string):Promise<CreateBookingDto[] >
      {
          const user= await this.bookingRepository.getBookingDataByUserId(userId);
          if (user.length==0)
          {
            throw new NotFoundException('data not found');
          }
          return  user
      }




      //get booking history by user id
      async getBookingHistory (userId:string):Promise<booking[]>
      {
          const result= await this.bookingRepository.getBookingHistory(userId);
          if (result.length==0)
          {
            throw new NotFoundException('data not found');
          }
            return  result;
      }




      // delete booking by driver id
      async deleteBookingByDriverId (driverId:string):Promise<{ booking:booking[]; message: string }>
      {
        const  booking= await this.bookingRepository.deleteBookingByDriverId(driverId);
        return { message: "deleted successfully",booking:booking};
      }



      // delete booking by car id
      async deleteBookingByCarId (carId:string):Promise<{ booking:booking[]; message: string }>
      {
        const  booking= await this.bookingRepository.deleteBookingByCarId(carId);
        return { message: "deleted successfully",booking:booking};
      }


}

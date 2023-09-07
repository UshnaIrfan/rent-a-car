import { BadRequestException, Body, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { CreateBookingDto } from './dto/create-booking.dto';
import createBookingInterface from "./interfaces/create-booking.interface";
import { bookingRepository } from "./booking.repository";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "../users/users.service";
import { CarService } from "../car/car.service";
import { driverRepository } from "../driver/driver.repository";
import { booking } from "./schemas/booking.schema";
import { LanguagesService } from "../languages/languages.service";
import { PackagesService } from "../packages/packages.service";
import { UpdateBookingDto } from "./dto/update-booking.dto";
import * as path from 'path';
import * as handlebars from "handlebars";
import * as fs from "fs";
import { userBookingDocumentsDto } from "./dto/user-booking-documents.dto";
import { userVerificationsDocumentsService } from "../user-verifications-documents/user-verifications-documents.service";
import { UserDocumentsService } from "../user-documents/user-documents.service";
import {timeRepository} from "../time/time.repository";
import { TimeService } from "../time/time.service";


@Injectable()
export class BookingService {

  constructor(private readonly bookingRepository:bookingRepository,
              private jwtService: JwtService,
              private usersService: UsersService,
              private readonly carService: CarService,
              private readonly languagesService: LanguagesService,
              private readonly packagesService: PackagesService,
              private readonly DriverRepository:driverRepository,
              private readonly timeRepository:timeRepository,
              private readonly timeService: TimeService,
              private readonly UsersDocumentService: UserDocumentsService,
              private readonly UserVerificationsDocumentsService: userVerificationsDocumentsService,
  ) {}


    // create
    async createBooking(createBookingInterface:createBookingInterface,userId:string)
    {
          const car= await this.carService.getCarByCarId(createBookingInterface.carId);
          if(!car)
          {
            throw new NotFoundException('car  not exist');
          }

          const Package = await this.packagesService.getPackagesById(createBookingInterface.packagesId);
          if(!Package)
          {
            throw new NotFoundException('package not found');
          }

          if(createBookingInterface.driverId !==null)
          {
            const driver=await this.DriverRepository.getDriverById(createBookingInterface.driverId)
            if(!driver)
            {
              throw new NotFoundException('driver not exist');
            }
          }

          await this.timeRepository.getTimeById(createBookingInterface.pickupTimeId);
          const timeIds = [createBookingInterface.pickupTimeId, createBookingInterface.dropoffTimeId];
          const resultArray = await this.timeService.getTimesById(timeIds);
          if (resultArray.length==0 || resultArray.length !== 2)
          {
               throw new BadRequestException(`invalid  time data`);
          }
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




        // update booking
        async updateBooking (bookingId:string,body:UpdateBookingDto):Promise<{ booking:booking; message: string }>
        {
            const booking = await this.bookingRepository.updateBooking(bookingId,body);
            return { message: "updated successfully", booking};
        }



        //booking user documents saved  in user document table
        async UserDocument(@Body() body:userBookingDocumentsDto,userId:string )
        {
              await this.usersService.getUserById(userId)
              const slug = await this.UserVerificationsDocumentsService.gettittlebySlug(body.slug)
              if (!slug)
              {
                throw new NotFoundException('Invalid slug');
              }
              const userData: userBookingDocumentsDto & { titleName: string,type:string ,userId:string} = {
                ...body,
                userId:userId,
                titleName:slug.title,
                type:slug.type,
              };
              const user = await this.UsersDocumentService.UserDocument(userData);
              const base64Data = user.image;
              const base64image = base64Data.split(';base64,').pop();
              const pdfBuffer = Buffer.from(base64image, 'base64');

              const savePath = path.join(
                __dirname,
                '../../../..',
                '/asset/',
                `${user.id}-${user.type}-${user.titleName}.png`
              );
              fs.writeFileSync(savePath, pdfBuffer);
              return user;
        }


}

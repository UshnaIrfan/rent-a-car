import {  Body, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import createBookingInterface from "./interfaces/create-booking.interface";
import { bookingRepository } from "./booking.repository";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "../users/users.service";
import { CarService } from "../car/car.service";
import { driverRepository } from "../driver/driver.repository";
import { booking } from "./schemas/booking.schema";
import { LanguagesService } from "../languages/languages.service";
import { UpdateBookingDto } from "./dto/update-booking.dto";
import * as path from 'path';
import * as fs from "fs";
import { userBookingDocumentsDto } from "./dto/user-booking-documents.dto";
import { userVerificationsDocumentsService } from "../user-verifications-documents/user-verifications-documents.service";
import { UserDocumentsService } from "../user-documents/user-documents.service";
import {timeRepository} from "../time/time.repository";
import { TimeService } from "../time/time.service";
import { updateBookingStatusDto } from "./dto/update-booking-status.dto";
import { pricingService } from "../pricing/pricing.service";


@Injectable()
export class BookingService {

  constructor(private readonly bookingRepository:bookingRepository,
              private jwtService: JwtService,
              private usersService: UsersService,
              private readonly carService: CarService,
              private readonly languagesService: LanguagesService,
              private readonly DriverRepository:driverRepository,
              private readonly timeRepository:timeRepository,
              private readonly timeService: TimeService,
              private readonly pricingService: pricingService,
              private readonly UsersDocumentService: UserDocumentsService,
              private readonly UserVerificationsDocumentsService: userVerificationsDocumentsService,
  ) {}


    // create
    async createBooking(createBookingInterface:createBookingInterface,userId:string)
    {
          const car= await this.carService.getCarByIdAndSet(createBookingInterface.carId);
          if(!car)
          {
            throw new NotFoundException('car  not exist');
          }

          const price = await this.pricingService.getPricingById(createBookingInterface.priceId);
          if(!price)
          {
            throw new NotFoundException('package not found');
          }

          if(createBookingInterface.driverId !==null)
          {
            const driver=await this.DriverRepository.getDriverByIdAndSet(createBookingInterface.driverId)
            if(!driver)
            {
              throw new NotFoundException('driver not exist');
            }
          }

         const bookingData: createBookingInterface & { userId: string } = { ...createBookingInterface, userId: userId };
         return  await this.bookingRepository.createBooking(bookingData);
    }




      // get booking data by user id
      async getBookingDataByUserId (userId:string):Promise<booking[] >
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




       // update booking status
        async updateBookingStatus (body:updateBookingStatusDto,bookingId:string):Promise<{ booking:booking; message: string }>
        {
            const booking = await this.bookingRepository.updateBookingStatus(body,bookingId);
            return { message: " booking status updated successfully", booking};
        }




      //get booking data by booking id
      async getBookingDataByBookingId (bookingId:string):Promise<booking[] >
      {
        const result= await this.bookingRepository.getBookingDataByBookingId(bookingId);
        if (result.length==0)
        {
          throw new NotFoundException('data not found');
        }
        return  result
      }

}

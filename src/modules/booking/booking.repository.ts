import { Injectable, NotFoundException } from "@nestjs/common";
import {  Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { booking } from "./schemas/booking.schema";
import { CreateBookingDto } from "./dto/create-booking.dto";
import { validateUuid } from "../../decorators/uuid.decorators";
import { car } from "../car/schemas/car.schema";
import { UpdateBookingDto } from "./dto/update-booking.dto";
import { updateBookingStatusDto } from "./dto/update-booking-status.dto";
import { driverRepository } from "../driver/driver.repository";



@Injectable()
export class bookingRepository{
  constructor(@InjectRepository(booking) private bookingModel: Repository<booking>,
              private readonly DriverRepository:driverRepository,

  ) {}


      // create
      async createBooking(CreateBookingDto: CreateBookingDto): Promise<booking| null>
      {
        return  await this.bookingModel.save(CreateBookingDto);
      }



      //get booking data by user id
      async getBookingDataByUserId(userId: string):Promise<booking[] | null>
      {
          validateUuid([userId]);
          const bookings = await this.bookingModel.find({ where: {userId },
           relations: ['car','driver'] });
           return bookings;
      }





     // get booking history by user id
      async getBookingHistory(userId: string):Promise<booking[] | null>
      {
          validateUuid([userId]);
           let whereConditions: any = {};
            if (userId )
            {
              whereConditions = {
                userId: userId ?? undefined,
              };
            }
            const results = await this.bookingModel.find({
            where: Object.keys(whereConditions).length !== 0 ? [whereConditions] : [],
            relations: ['car','driver'] });
            return results;
      }



        // delete booking by driver id
        async deleteBookingByDriverId(driverId: string):Promise<booking[]| null>
        {
          validateUuid([driverId]);
          const result = await this.bookingModel.find({ where: {  driverId:driverId}});
          if (result.length==0)
          {
            throw new NotFoundException('data not found');
          }

          return await this.bookingModel.remove(result);
        }



      // delete booking by car id
      async deleteBookingByCarId(carId: string):Promise<booking[]| null>
      {
          validateUuid([carId]);
          const result = await this.bookingModel.find({ where: { carId:carId}});
          if (result.length==0)
          {
            throw new NotFoundException('data not found');
          }
          return await this.bookingModel.remove(result);
      }





      // update booking
      async updateBooking(bookingId: string, body: UpdateBookingDto): Promise<booking| null>
      {
            validateUuid([bookingId]);
            const result = await this.bookingModel.findOne({ where: { id:bookingId}});
            if (!result)
            {
              throw new NotFoundException('booking not found');
            }
            for (const key in body)
            {
                if (body.hasOwnProperty(key))
                {
                  result[key] = body[key];
                }
            }
            const updatedResult = await this.bookingModel.save(result);
            return updatedResult;
      }




    // update booking status
    async updateBookingStatus(body:updateBookingStatusDto,bookingId:string): Promise<booking| null>
    {
          validateUuid([bookingId]);
          const result = await this.bookingModel.findOne({ where: { id:bookingId}});
          if (!result)
          {
            throw new NotFoundException('booking not found');
          }
          result.bookingStatus=body.bookingStatus;
          await this.DriverRepository.getdriverByIdAndSet(result.driverId)
          const updatedResult = await this.bookingModel.save(result);
          return updatedResult;
    }




      //get booking data by booking id
      async getBookingDataByBookingId(bookingId: string):Promise<booking[] | null>
      {
          validateUuid([bookingId]);
          const bookings = await this.bookingModel.find({ where: {id:bookingId },
            relations:['User','car','driver']
          });
          return bookings;
      }

}


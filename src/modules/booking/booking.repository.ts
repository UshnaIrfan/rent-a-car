import { Injectable, NotFoundException } from "@nestjs/common";
import {  Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { booking } from "./schemas/booking.schema";
import { CreateBookingDto } from "./dto/create-booking.dto";
import { validateUuid } from "../../decorators/uuid.decorators";
import { car } from "../car/schemas/car.schema";



@Injectable()
export class bookingRepository{
  constructor(@InjectRepository(booking) private bookingModel: Repository<booking>
  ) {}


      // create
      async createBooking(CreateBookingDto: CreateBookingDto): Promise<booking| null>
      {
        return  await this.bookingModel.save(CreateBookingDto);
      }


      //get booking data by user id
      async getBookingDataByUserId(userId: string):Promise<booking[] | null>
      {
          validateUuid(userId);
          const bookings = await this.bookingModel.find({ where: {userId },
           relations: ['car']
          });
          return bookings;
      }




  // get booking history by user id
      async getBookingHistory(userId: string):Promise<booking[] | null>
      {
          validateUuid(userId);
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

}


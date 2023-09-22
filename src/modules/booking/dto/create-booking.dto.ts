import {IsNotEmpty, IsString } from "class-validator"
import { ApiProperty } from "@nestjs/swagger";
import { bookingStatus } from "../schemas/booking.schema";

export class CreateBookingDto {


        @ApiProperty()
        @IsString()
        @IsNotEmpty()
        carId: string;


        @ApiProperty()
        @IsString()
        @IsNotEmpty()
        priceId: string;



        @ApiProperty({default: null })
        @IsString()
        @IsNotEmpty()
        driverId: string;



        @ApiProperty()
        @IsString()
        @IsNotEmpty()
        pickupDate: Date;



        @ApiProperty()
        @IsString()
        @IsNotEmpty()
        dropoffDate: Date;


        @ApiProperty()
        @IsString()
        @IsNotEmpty()
        pickupTime: string;



        @ApiProperty()
        @IsString()
        @IsNotEmpty()
        dropoffTime: string;


        @ApiProperty({ type: String, enum: bookingStatus, default:bookingStatus.BOOKED })
        @IsString()
        @IsNotEmpty()
        bookingStatus:string;

}

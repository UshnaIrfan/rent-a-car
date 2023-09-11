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
        packagesId: string;



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
        pickupTimeId: string;



        @ApiProperty()
        @IsString()
        @IsNotEmpty()
        dropoffTimeId: string;


        @ApiProperty({ type: String, enum: bookingStatus, default:bookingStatus.PENDING })
        @IsString()
        @IsNotEmpty()
        bookingStatus:string;

}

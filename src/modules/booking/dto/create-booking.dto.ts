import {IsNotEmpty, IsString } from "class-validator"
import { ApiProperty } from "@nestjs/swagger";

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

}

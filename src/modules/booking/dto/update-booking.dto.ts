import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class UpdateBookingDto {

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
}

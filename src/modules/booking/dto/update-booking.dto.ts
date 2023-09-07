import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateBookingDto } from './create-booking.dto';
import { IsNotEmpty, IsString } from "class-validator";

export class UpdateBookingDto extends PartialType(CreateBookingDto) {

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
}

import {
  IsNotEmpty,
  IsString,
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import {bookedStatus} from "../schemas/driver.schema";

export class updateDriverDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    firstName : string;


    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    lastName: string;


    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    dateOfBirth: Date;


    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    countryId: string;



    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    phoneNo : string;


    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    image: string;


    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    hourlyRate : string;

    @ApiProperty({ type: String, enum: bookedStatus, default: bookedStatus.UNBOOKED })
    @IsString()
    @IsNotEmpty()
    bookedStatus:string;
}

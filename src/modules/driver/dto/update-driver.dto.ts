import {
  IsNotEmpty,
  IsString,
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

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
    country: string;



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


}

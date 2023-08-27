import {
  IsEmail,
  IsNotEmpty,
  IsString,
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class createCarDto {

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  company : string;


  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  model: string;


  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  year: string;




  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  color : string;


  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  transmission: string;


  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  carType : string;



  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  baggageOption: string;



  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  seatsCapacity : string;



  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  mileage: string ;


  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  chassyNo: string ;



  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  numberPlate: string ;


  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  securityAmount: string ;



  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  driverOption: string ;


  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string ;

}

import {
  IsNotEmpty,
  IsString,
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import {carBookedStatus} from "../schemas/car.schema";

export class updateCarDto {

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  brandId : string;


  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  modelId: string;


  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  yearId: string;



  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  colorId : string;


  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  transmissionId: string;


  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  carTypeId : string;



  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  baggageOptionId: string;



  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  seatsCapacityId : string;



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



  @ApiProperty({ type: [String]})
  driverIds: string[];


  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string ;


  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  latitude: string ;


  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  longitude: string ;


  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  pickUpLocation: string ;



  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  dropOffLocation : string ;


  @ApiProperty({ type: String, enum: carBookedStatus, default: carBookedStatus.UNBOOKED })
  @IsString()
  @IsNotEmpty()
  carBookedStatus:string;

}

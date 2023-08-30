import {IsNotEmpty, IsString } from "class-validator"
import { ApiProperty } from "@nestjs/swagger";

export class CreatePricingDto {


      @ApiProperty()
      @IsString()
      @IsNotEmpty()
      carId: string;


      @ApiProperty()
      @IsString()
      @IsNotEmpty()
      timeId: string;


      @ApiProperty()
      @IsString()
      @IsNotEmpty()
      price: string;


}

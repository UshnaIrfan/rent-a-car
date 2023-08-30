import {IsNotEmpty, IsString } from "class-validator"
import { ApiProperty } from "@nestjs/swagger";


export class CreateCarImageDto {


  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  carId: string;


  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  image: string;


}

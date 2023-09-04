import {IsNotEmpty, IsString } from "class-validator"
import { ApiProperty } from "@nestjs/swagger";


export class CreateSeatsCapacityDto {

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  seatsCapacity: Number;



}

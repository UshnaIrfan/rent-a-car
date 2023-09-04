import {IsNotEmpty, IsString } from "class-validator"
import { ApiProperty } from "@nestjs/swagger";
import { driverOptionStatus } from "../schemas/driver-option.schema";


export class CreateDriverOptionDto {


  @ApiProperty({type: String,enum: driverOptionStatus , default: driverOptionStatus.DRIVER})
  @IsString()
  @IsNotEmpty()
  driverOption: string;


}

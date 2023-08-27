import {IsNotEmpty, IsString } from "class-validator"
import { ApiProperty } from "@nestjs/swagger";
import { transmissiontype } from "../schemas/transmission.schema";


export class CreateTransmissionDto {

  @ApiProperty({ type: String, enum: transmissiontype, default: transmissiontype.MANUAL })
  @IsString()
  @IsNotEmpty()
  transmission:string;


}

import {IsNotEmpty, IsString } from "class-validator"
import { ApiProperty } from "@nestjs/swagger";

export class CreateBaggageOptionDto {

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  baggageOption: Number;


}

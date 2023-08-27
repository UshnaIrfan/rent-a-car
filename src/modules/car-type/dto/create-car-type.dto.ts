import {IsNotEmpty, IsString } from "class-validator"
import { ApiProperty } from "@nestjs/swagger";


export class CreateCarTypeDto {

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  carType: string;


}

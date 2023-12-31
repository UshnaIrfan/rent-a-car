import {IsNotEmpty, IsString } from "class-validator"
import { ApiProperty } from "@nestjs/swagger";


export class CreateTimeDto {

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  time: string;

}

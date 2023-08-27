import {IsNotEmpty, IsString } from "class-validator"
import { ApiProperty } from "@nestjs/swagger";


export class CreateYearDto {

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  year: string;


}

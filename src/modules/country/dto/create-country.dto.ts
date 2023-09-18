import {IsNotEmpty, IsString } from "class-validator"
import { ApiProperty } from "@nestjs/swagger";


export class CreateCountryDto {

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  countryName: string;


}

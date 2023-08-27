import {IsNotEmpty, IsString } from "class-validator"
import { ApiProperty } from "@nestjs/swagger";


export class CreateColorDto {

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  colorName: string;


}

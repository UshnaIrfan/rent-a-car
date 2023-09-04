import {IsNotEmpty, IsString } from "class-validator"
import { ApiProperty } from "@nestjs/swagger";

export class CreateLanguageDto {

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  languages: string;


}

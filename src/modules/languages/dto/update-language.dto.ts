import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class UpdateLanguageDto {

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  languages: string;

}

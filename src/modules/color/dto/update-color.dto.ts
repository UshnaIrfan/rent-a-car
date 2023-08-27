import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateColorDto } from './create-color.dto';
import { IsNotEmpty, IsString } from "class-validator";

export class UpdateColorDto extends PartialType(CreateColorDto) {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  colorName: string;

}

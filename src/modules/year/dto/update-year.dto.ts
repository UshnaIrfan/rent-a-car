import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateYearDto } from './create-year.dto';
import { IsNotEmpty, IsString } from "class-validator";

export class UpdateYearDto extends PartialType(CreateYearDto) {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  year: string;
}

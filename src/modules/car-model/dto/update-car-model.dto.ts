import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateCarModelDto } from './create-car-model.dto';
import { IsNotEmpty, IsString } from "class-validator";

export class UpdateCarModelDto extends PartialType(CreateCarModelDto) {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  model: string;
}

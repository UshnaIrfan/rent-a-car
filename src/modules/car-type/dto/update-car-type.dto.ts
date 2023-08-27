import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateCarTypeDto } from './create-car-type.dto';
import { IsNotEmpty, IsString } from "class-validator";

export class UpdateCarTypeDto extends PartialType(CreateCarTypeDto) {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  carType: string;

}

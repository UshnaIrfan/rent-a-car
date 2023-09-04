import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateSeatsCapacityDto } from './create-seats-capacity.dto';
import { IsNotEmpty, IsString } from "class-validator";

export class UpdateSeatsCapacityDto extends PartialType(CreateSeatsCapacityDto) {

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  seatsCapacity: Number;

}

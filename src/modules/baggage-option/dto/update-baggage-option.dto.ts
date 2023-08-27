import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateBaggageOptionDto } from './create-baggage-option.dto';
import { IsNotEmpty, IsString } from "class-validator";

export class UpdateBaggageOptionDto extends PartialType(CreateBaggageOptionDto) {

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  baggageOption: string;

}

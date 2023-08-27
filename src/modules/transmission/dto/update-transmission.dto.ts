import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateTransmissionDto } from './create-transmission.dto';
import { IsNotEmpty, IsString } from "class-validator";

export class UpdateTransmissionDto extends PartialType(CreateTransmissionDto) {


  @ApiProperty({ type: String })
  @IsString()
  @IsNotEmpty()
  transmission:string;

}

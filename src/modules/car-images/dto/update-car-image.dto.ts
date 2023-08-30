import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class UpdateCarImageDto {

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  image: string;
}

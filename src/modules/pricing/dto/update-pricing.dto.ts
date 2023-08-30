import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class UpdatePricingDto  {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  price: string;
}

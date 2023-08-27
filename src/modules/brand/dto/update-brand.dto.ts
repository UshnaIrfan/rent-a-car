import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateBrandDto } from './create-brand.dto';
import { IsNotEmpty, IsString } from "class-validator";

export class UpdateBrandDto extends PartialType(CreateBrandDto) {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  brandName: string;
}

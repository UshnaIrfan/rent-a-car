import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsString
} from "class-validator";

export class adminUpdateCategoryDto {


  @ApiProperty({ type: String, required: true })
  @IsString()
  @IsNotEmpty()
  categoryId: string;



  @ApiProperty({ type: Boolean, default: false })
  @IsBoolean()
  readonly approvedByAdmin: boolean;




}

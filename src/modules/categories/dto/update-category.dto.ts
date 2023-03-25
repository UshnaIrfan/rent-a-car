import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
} from "class-validator";


export class updateCategoryDto {

  @ApiProperty({ type: String, required: true })
  @IsString()
  @IsString()
  @IsNotEmpty()
  category_ID: string;

  @ApiProperty({ type: String, required: true })
  @IsString()
  @IsString()
  @IsNotEmpty()
  category_name: string;
}

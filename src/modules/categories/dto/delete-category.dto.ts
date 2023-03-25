import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
} from "class-validator";


export class deleteCategoryDto {

    @ApiProperty({ type: String, required: true })
    @IsString()
    @IsNotEmpty()
    category_ID: string;

}

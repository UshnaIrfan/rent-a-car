import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
} from "class-validator";


export class CreateCategoryDto {


     @ApiProperty({ type: String, required: true })
     @IsString()
     @IsNotEmpty()
     categoryId: string;

     @ApiProperty({ type: String, required: true })
     @IsString()
     @IsNotEmpty()
     categoryName: string;
}

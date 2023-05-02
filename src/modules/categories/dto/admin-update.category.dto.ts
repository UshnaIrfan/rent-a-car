import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString
} from "class-validator";
export class adminUpdateCategoryDto {


     @ApiProperty({ type: String, required: true })
     @IsString()
     @IsNotEmpty()
     categoryId: string;


     @ApiProperty({ type: String })
     @IsString()
     readonly approvedByAdmin: string;

}

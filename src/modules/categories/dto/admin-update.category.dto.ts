import {
  IsNotEmpty,
  IsString
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class adminUpdateCategoryDto {


     @ApiProperty({ type: String, required: true })
     @IsString()
     @IsNotEmpty()
     categoryId: string;


     @ApiProperty({ type: String })
     @IsString()
     approvedByAdmin: string;

}

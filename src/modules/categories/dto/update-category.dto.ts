import {
  IsNotEmpty,
  IsString
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class updateCategoryDto {


    @ApiProperty({ type: String, required: true })
    @IsString()
    @IsNotEmpty()
    id: string;


    @ApiProperty({ type: String, required: true })
    @IsString()
    @IsNotEmpty()
    categoryName: string;

}

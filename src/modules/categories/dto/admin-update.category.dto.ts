import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString
} from "class-validator";
import {status} from "../schemas/category.schema";

export class adminUpdateCategoryDto {


     @ApiProperty({ type: String, required: true })
     @IsString()
     @IsNotEmpty()
     categoryId: string;



    @ApiProperty({ type: String, enum: status, default: status.PENDING ,required:true })
    @IsString()
    @IsNotEmpty()
    readonly approvedByAdmin: string = status.PENDING;

}

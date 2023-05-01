import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString
} from "class-validator";
import { string } from "joi";
import {status} from "../schemas/category.schema";


export class CreateCategoryDto {


      @ApiProperty({ type: String, required: true })
      @IsString()
      @IsNotEmpty()
      categoryName: string;



      @ApiProperty({ type: String, enum: status, default: status.PENDING })
      @IsString()
      readonly approvedByAdmin: string = status.PENDING;




     // @ApiProperty({ type: Boolean, default: true })
     // @IsBoolean()
     // readonly  isListing: boolean;

}

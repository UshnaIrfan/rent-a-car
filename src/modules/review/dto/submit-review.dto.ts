import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty, IsOptional
} from "class-validator";

export class submitReviewDto {

     @ApiProperty({ type: String, required: true  })
     @IsNotEmpty()
     sellerId: string;


     @ApiProperty({ type: String, required: true  })
     @IsNotEmpty()
     titleId: string;



     @ApiProperty({ type: String, required: false, default: null })
     @IsOptional()
     message: string | null;


 }


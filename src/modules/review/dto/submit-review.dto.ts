import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty
} from "class-validator";

export class submitReviewDto {

     @ApiProperty({ type: String, required: true  })
     @IsNotEmpty()
     sellerId: string;


     @ApiProperty({ type: String, required: true  })
     @IsNotEmpty()
     balloonId: string;


     @ApiProperty({ type: String, required: false, default: '' })
     message: string;


 }


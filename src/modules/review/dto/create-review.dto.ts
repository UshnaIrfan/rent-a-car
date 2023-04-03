import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty
} from "class-validator";

export class createReviewDto {

     @ApiProperty({ type: String, required: true  })
     @IsEmail()
     @IsNotEmpty()
     sellerID: string;


     @ApiProperty({ type: String, required: true  })
     @IsEmail()
     @IsNotEmpty()
     categoryID: string;


     @ApiProperty({ type: String, required: true  })
     @IsEmail()
     @IsNotEmpty()
     reactionName: string;


     @ApiProperty({ type: String, required: true  })
     @IsEmail()
     @IsNotEmpty()
     comment: string;

}


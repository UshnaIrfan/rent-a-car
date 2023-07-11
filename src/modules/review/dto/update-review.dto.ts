import {
  IsNotEmpty,
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class updateReviewDto {


    @ApiProperty({ type: String, required: true  })
    @IsNotEmpty()
    reviewId: string;


    @ApiProperty({ type: String, required: true  })
    @IsNotEmpty()
    titleId: string;


    @ApiProperty({ type: String, required: false })
    message: string;

}

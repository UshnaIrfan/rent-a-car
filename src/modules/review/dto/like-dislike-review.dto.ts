import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty
} from "class-validator";

export class likeDislikeReviewDto{

    @ApiProperty({ type: String, required: true })
    @IsNotEmpty()
    reviewId: string;


    @ApiProperty({ type: String, required: true })
    @IsNotEmpty()
    type: string;

}


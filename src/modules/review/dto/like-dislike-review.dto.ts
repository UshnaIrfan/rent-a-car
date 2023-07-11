import {
  IsNotEmpty
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class likeDislikeReviewDto{

    @ApiProperty({ type: String, required: true })
    @IsNotEmpty()
    reviewId: string;


    @ApiProperty({ type: String, required: true })
    @IsNotEmpty()
    type: string;

}


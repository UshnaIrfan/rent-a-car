import {
  IsNotEmpty,
  IsString
} from "class-validator";
import { boolean } from "joi";
import { ApiProperty } from "@nestjs/swagger";
export class adminUpdateSubmitReviewDto {


    @ApiProperty({ type: String, required: true })
    @IsString()
    @IsNotEmpty()
    reviewId: string;



    @ApiProperty({ type: boolean })
    approvedByAdmin:boolean;

}

import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString
} from "class-validator";
import { boolean } from "joi";
export class adminUpdateSubmitReviewDto {


    @ApiProperty({ type: String, required: true })
    @IsString()
    @IsNotEmpty()
    reviewId: string;



    @ApiProperty({ type: boolean })
    @IsString()
    approvedByAdmin:boolean;

}

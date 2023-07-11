import {
  IsNotEmpty,
  IsString
} from "class-validator";
import { boolean } from "joi";
import { ApiProperty } from "@nestjs/swagger";
export class adminUpdateBestwriterReviewDto{

    @ApiProperty({ type: String, required: true })
    @IsString()
    @IsNotEmpty()
    reviewId: string;



    @ApiProperty({ type:boolean })
    bestWriter:boolean;


    @ApiProperty({ type: String, required: true })
    @IsString()
    @IsNotEmpty()
    subject: string;


    @ApiProperty({ type: String, required: true })
    @IsString()
    @IsNotEmpty()
    emailBody: string;

}

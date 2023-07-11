import {
     IsBoolean,
     IsNotEmpty, IsOptional
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class submitReviewDto {

     @ApiProperty({ type: String, required: true  })
     @IsNotEmpty()
     sellerId: string;


     @ApiProperty({ type: String, required: false ,default:null  })
     @IsOptional()
     titleId: string | null;



     @ApiProperty({ type: String, required: false, default: null })
     @IsOptional()
     message: string | null;


     @ApiProperty({ type: Boolean, default: true })
     @IsBoolean()
     @IsNotEmpty()
     approvedByAdmin: boolean;


     @ApiProperty({ type: Boolean, default: false })
     @IsBoolean()
     @IsNotEmpty()
     bestWriter: boolean;


}


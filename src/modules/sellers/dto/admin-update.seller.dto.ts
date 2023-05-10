import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsString
} from "class-validator";

export class adminUpdateSellerDto{


    @ApiProperty({ type: String, required: true })
    @IsString()
    @IsNotEmpty()
    sellerId: string;


    @ApiProperty({ type: String })
    @IsString()
    approvedByAdmin: string;


    @ApiProperty({ type: Boolean, default: true })
    @IsBoolean()
    isListing: boolean;

}

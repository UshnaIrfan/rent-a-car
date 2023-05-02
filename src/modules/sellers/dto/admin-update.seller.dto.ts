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
    readonly approvedByAdmin: string;


    @ApiProperty({ type: Boolean, default: true })
    @IsBoolean()
    readonly isListing: boolean;

}

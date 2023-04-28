import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsString
} from "class-validator";
import { string } from "joi";

export class adminUpdateSellerDto{


    @ApiProperty({ type: String, required: true })
    @IsString()
    @IsNotEmpty()
    sellerId: string;



  @ApiProperty({ type: string })
  @IsString()
  readonly approvedByAdmin: string;

    // @ApiProperty({ type: Boolean, default: false })
    // @IsBoolean()
    // readonly  approvedByAdmin: boolean;



    @ApiProperty({ type: Boolean, default: true })
    @IsBoolean()
    readonly isListing: boolean;

}

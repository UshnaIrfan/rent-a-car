import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsString
} from "class-validator";

export class  addSellerDto{


     @ApiProperty({ type: String, required: true })
     @IsString()
     @IsNotEmpty()
     sellerName: string;


     @ApiProperty({ type: String, required: true })
     @IsString()
     @IsNotEmpty()
     sellerUrl: string;


     @ApiProperty({ type: Boolean, default: false })
     @IsBoolean()
     readonly  approvedByAdmin: boolean;


     @ApiProperty({ type: Boolean, default: true })
     @IsBoolean()
     readonly isListing: boolean;


     @ApiProperty({ type: [String]})
     categories: string[];



     @ApiProperty({ type: String, required: true  })
     @IsNotEmpty()
     titleId: string;


     @ApiProperty({ type: String, required: false, default: '' })
     message: string;

}
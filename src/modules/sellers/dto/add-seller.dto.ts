import { ApiProperty } from '@nestjs/swagger';
import {
     IsBoolean,
     IsNotEmpty, IsOptional,
     IsString
} from "class-validator";
import { string } from "joi";

export class  addSellerDto{


     @ApiProperty({ type: String, required: true })
     @IsString()
     @IsNotEmpty()
     sellerName: string;


     @ApiProperty({ type: String, required: true })
     @IsString()
     @IsNotEmpty()
     sellerUrl: string;


     @ApiProperty({ type: string })
     @IsString()
     readonly approvedByAdmin: string;

     // @ApiProperty({ type: Boolean, default: false })
     // @IsBoolean()
     // readonly  approvedByAdmin: boolean;


     @ApiProperty({ type: Boolean, default: true })
     @IsBoolean()
     readonly isListing: boolean;


     @ApiProperty({ type: [String]})
     categories: string[];



     @ApiProperty({ type: String, required: false ,default:null})
     @IsOptional()
     @IsNotEmpty()
     titleId: string;


     @ApiProperty({ type: String, required: false, default: null })
     @IsOptional()
     message: string | null;

}

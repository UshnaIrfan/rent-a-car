import { ApiProperty } from '@nestjs/swagger';
import {
     IsBoolean,
     IsNotEmpty, IsOptional,
     IsString
} from "class-validator";
import { string } from "joi";
import {status} from "../schemas/seller.schema";

export class  addSellerDto{


     @ApiProperty({ type: String, required: true })
     @IsString()
     @IsNotEmpty()
     sellerName: string;


     @ApiProperty({ type: String, required: true })
     @IsString()
     @IsNotEmpty()
     sellerUrl: string;


     @ApiProperty({ type: String, enum: status, default: status.PENDING })
     @IsString()
     readonly approvedByAdmin: string = status.PENDING;


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

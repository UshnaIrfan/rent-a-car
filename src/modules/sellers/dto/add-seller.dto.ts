import { ApiProperty } from '@nestjs/swagger';
import {
     IsBoolean,
     IsNotEmpty, IsOptional,
     IsString
} from "class-validator";
import {status} from "../schemas/seller.schema";
import {type} from "../schemas/seller.schema";

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
     approvedByAdmin: string = status.PENDING;

     @ApiProperty({ type: String, enum: type, default:type.NATIONAL,required:true })
     @IsString()
     type: string = type.NATIONAL;


     @ApiProperty({ type: String,required: true })
     @IsString()
     @IsNotEmpty()
     country: string;


     @ApiProperty({ type: String,default:null})
     @IsString()
     state: string;


     @ApiProperty({ type: String,default:null })
     @IsString()
     address: string;



     @ApiProperty({ type: Boolean, default: true })
     @IsBoolean()
     isListing: boolean;


     @ApiProperty({ type: [String]})
     categories: string[];



     @ApiProperty({ type: String, required: false ,default:null})
     @IsOptional()
     @IsNotEmpty()
     titleId: string;


     @ApiProperty({ type: String, required: false, default: null })
     @IsOptional()
     message: string | null;


     @ApiProperty({ type: Boolean, default: true })
     @IsBoolean()
     @IsNotEmpty()
     approvedbyAdmin: boolean;

     @ApiProperty({ type: Boolean, default: false })
     @IsBoolean()
     @IsNotEmpty()
     bestWriter: boolean;

}

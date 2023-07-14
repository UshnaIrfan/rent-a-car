import { IsBoolean, IsNotEmpty, IsString } from "class-validator";
import { status } from "../../categories/schemas/category.schema";
import {types} from "../schemas/seller.schema";
import { ApiProperty } from "@nestjs/swagger";

export class CreateSellerDto {


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


     @ApiProperty({ type: String, enum: types, default:types.DEFAULT,required:true})
     @IsString()
     type: string = types.DEFAULT;


     @ApiProperty({ type: String, required: true })
     @IsString()
     @IsNotEmpty()
     country: string;

     @ApiProperty({ type: String,default:null,required: true})
     @IsString()
     @IsNotEmpty()
     city: string;

     @ApiProperty({ type: String,default:null,required: true})
     @IsString()
     @IsNotEmpty()
     state: string;


     @ApiProperty({ type: Boolean, default: true })
     @IsBoolean()
     readonly isListing: boolean;


     @ApiProperty({ type: [String]})
     categories: string[];

}

import { ApiProperty } from '@nestjs/swagger';
import {
   IsBoolean,
   IsNotEmpty,
   IsString
} from "class-validator";
import { status } from "../../categories/schemas/category.schema";

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


     @ApiProperty({ type: Boolean, default: true })
     @IsBoolean()
     readonly isListing: boolean;


     @ApiProperty({ type: [String]})
     categories: string[];

}

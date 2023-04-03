import { ApiProperty } from '@nestjs/swagger';
import {
   IsBoolean,
   IsNotEmpty, IsNumber,
   IsString
} from "class-validator";
import { Column } from "typeorm";


export class CreateSellerDto {


   // @ApiProperty({ type: String, required: true })
   // @IsString()
   // @IsNotEmpty()
   // sellerId: string;

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


     @ApiProperty({ type: [String], })
     categories: string[];

}

import { ApiProperty } from '@nestjs/swagger';
import {
     IsBoolean,
     IsNotEmpty,
     IsString
} from "class-validator";
import { string } from "joi";

export class updateSellerDto {


     @ApiProperty({ type: String, required: true })
     @IsString()
     @IsNotEmpty()
     id: string;


     @ApiProperty({ type: String, required: true })
     @IsString()
     @IsNotEmpty()
     sellerName: string;



     @ApiProperty({ type: String, required: true })
     @IsString()
     @IsNotEmpty()
     sellerUrl: string;


     // @ApiProperty({ type: Boolean})
     // @IsBoolean()
     // readonly  approvedByAdmin: boolean;
     //
     //
     // @ApiProperty({ type: Boolean})
     // @IsBoolean()
     // readonly isListing: boolean;
     //
     //
     // @ApiProperty({ type: [string]})
     // categories: string;
}

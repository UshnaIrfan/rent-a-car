import { ApiProperty } from '@nestjs/swagger';
import {
     IsNotEmpty,
     IsString
} from "class-validator";

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


}

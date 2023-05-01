import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsString
} from "class-validator";
import { status } from "../../categories/schemas/category.schema";


export class adminUpdateSellerDto{


     @ApiProperty({ type: String, required: true })
     @IsString()
     @IsNotEmpty()
     sellerId: string;



    @ApiProperty({ type: String, enum: status, default: status.PENDING })
    @IsString()
    readonly approvedByAdmin: string = status.PENDING;



    @ApiProperty({ type: Boolean, default: true })
    @IsBoolean()
    readonly isListing: boolean;

}

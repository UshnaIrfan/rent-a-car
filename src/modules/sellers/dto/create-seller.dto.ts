import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
} from "class-validator";


export class CreateSellerDto {


  @ApiProperty({ type: String, required: true })
  @IsString()
  @IsNotEmpty()
  seller_ID: string;

  @ApiProperty({ type: String, required: true })
  @IsString()
  @IsNotEmpty()
  seller_name: string;

}

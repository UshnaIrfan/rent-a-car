import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
} from "class-validator";


export class deleteSellerDto {

  @ApiProperty({ type: String, required: true })
  @IsString()
  @IsNotEmpty()
  seller_ID: string;

}

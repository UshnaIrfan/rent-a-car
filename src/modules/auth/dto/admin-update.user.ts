import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString
} from "class-validator";
export class adminUpdateUserDto {


     @ApiProperty({ type: String, required: true })
     @IsString()
     @IsNotEmpty()
     userId: string;


     @ApiProperty({ type: String })
     @IsString()
     status: string;

}

import {
  IsNotEmpty,
  IsString
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class adminUpdateUserDto {


     @ApiProperty({ type: String, required: true })
     @IsString()
     @IsNotEmpty()
     userId: string;


     @ApiProperty({ type: String })
     @IsString()
     status: string;

}

import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString, Matches,
  MaxLength,
  MinLength
} from "class-validator";

export class updateUserDto {


     @ApiProperty({ type: String, required: true })
     @IsString()
     @IsNotEmpty()
     id: string;


     @ApiProperty({ type: String, required: true })
     @IsString()
     @IsNotEmpty()
     name: string;


     @ApiProperty({ type: String, required: true })
     @IsString()
     @IsNotEmpty()
     username: string;



     @ApiProperty({ type: String, required: true  })
     @IsEmail()
     @IsNotEmpty()
     email: string;




}

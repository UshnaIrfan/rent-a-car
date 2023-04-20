import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty, IsOptional,
  IsString,
  MaxLength,
  MinLength
} from "class-validator";
import { Role } from "../../../enums/role.enum";

export class SignUpUserDto {

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


     @ApiProperty({ type: String, required: true })
     @IsString()
     @IsNotEmpty()
     @MinLength(8)
     @MaxLength(64)
     password: string;


     // @ApiProperty({ required: false ,default:null })
     // roles: string;


}

import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  IsPhoneNumber
} from "class-validator";

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

    // @ApiProperty({ type: String, required: false })
    // @IsPhoneNumber()
    //  mobile_no: string;


}

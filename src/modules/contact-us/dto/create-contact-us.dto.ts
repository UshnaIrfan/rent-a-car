import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
} from "class-validator";

export class createContactUsDto {

    @ApiProperty({ type: String, required: true  })
    @IsEmail()
    @IsNotEmpty()
    email: string;


    @ApiProperty({ type: String, required: true  })
    @IsEmail()
    @IsNotEmpty()
    message: string;



}

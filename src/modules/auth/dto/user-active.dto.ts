import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty} from "class-validator";
import { boolean } from "joi";

export class userActiveDto {

     @ApiProperty({ type: String, required: true })
     @IsEmail()
     @IsNotEmpty()
     token: string;


     @ApiProperty({ type: String, required: true })
     @IsEmail()
     @IsNotEmpty()
     email: string;


     // @ApiProperty({ type: boolean, required: true })
     // @IsNotEmpty()
     // isActive: boolean;

     @ApiProperty({ type: String, required: true })
     @IsNotEmpty()
     status: string;


}


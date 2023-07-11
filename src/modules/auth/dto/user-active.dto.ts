import { IsEmail, IsNotEmpty} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class userActiveDto {

     @ApiProperty({ type: String, required: true })
     @IsEmail()
     @IsNotEmpty()
     token: string;


     @ApiProperty({ type: String, required: true })
     @IsEmail()
     @IsNotEmpty()
     email: string;


     @ApiProperty({ type: String, required: true })
     @IsNotEmpty()
     status: string;


}


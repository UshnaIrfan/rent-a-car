import { IsEmail, IsNotEmpty} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class userOtpActiveDto {

    @ApiProperty({ type: String, required: true })
    @IsEmail()
    @IsNotEmpty()
    Otp: string;


    @ApiProperty({ type: String, required: true })
    @IsEmail()
    @IsNotEmpty()
    email: string;


    @ApiProperty({ type: String, required: true })
    @IsNotEmpty()
    otp_status: string;


}


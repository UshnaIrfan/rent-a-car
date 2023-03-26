import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
export  class ForgotPasswordOtpDto {

    @ApiProperty({ type: String, required: true })
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    readonly email: string = '';
}

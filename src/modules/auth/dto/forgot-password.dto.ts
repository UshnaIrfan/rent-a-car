import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export  class ForgotPasswordDto {

    @ApiProperty({ type: String, required: true })
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(64)
    email: string = '';


    @ApiProperty({ type: String, required: true })
    @IsNotEmpty()
    @IsString()
    otp: string = '';

}

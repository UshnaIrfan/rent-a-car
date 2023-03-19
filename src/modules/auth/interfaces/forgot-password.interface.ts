import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export  class ForgotPasswordInterface {

     @ApiProperty({ type: String, required: true })
     @IsNotEmpty()
     @IsString()
     @MinLength(3)
     @MaxLength(64)
     readonly email: string = '';

    @ApiProperty({ type: String, required: true })
    @IsNotEmpty()
    @IsString()
    readonly otp: string = '';

}

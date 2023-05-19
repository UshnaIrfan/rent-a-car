import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class ChangeUserPasswordDto {

    @ApiProperty({ type: String, required: true })
    @IsEmail()
    @IsNotEmpty()
    otp: string;

    @ApiProperty({ type: String, required: true })
    @IsEmail()
    @IsNotEmpty()
    email: string;


    @ApiProperty({ type: String, required: true })
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(64)
    @Matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/, {
        message: 'Password is too weak',
    })
    newPassword: string;


    @ApiProperty({ type: String, required: true })
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(64)
    @Matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/, {
        message: 'Password is too weak',
    })

   confirmPassword: string;


}


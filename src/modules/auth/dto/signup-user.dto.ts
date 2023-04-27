import { ApiProperty } from '@nestjs/swagger';
import {
     IsEmail,
     IsNotEmpty, IsOptional,
     IsString,
     MaxLength,
     MinLength, IsUppercase, IsLowercase, Matches
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
     @Matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/, {
          message: 'Password is too weak',
     })
     password: string;

     // @ApiProperty({ required: false ,default:null })
     // roles: string;

     @ApiProperty({ required: false, default: Role.L2A_USER })
     @IsOptional()
     roles: string ;



}

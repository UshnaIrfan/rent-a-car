import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Role } from "../../../enums/role.enum";

export class CreateUserDto {

     @IsString()
     @IsNotEmpty()
     name: string;

     @IsString()
     @IsNotEmpty()
     username: string;

     @IsEmail()
     @IsNotEmpty()
     email: string;


     @IsString()
     @IsNotEmpty()
     password: string;


     // @ApiProperty({  required: false,default:null})
     // roles: string|null;

     @ApiProperty({ required: false, default: Role.L2A_USER })
     @IsOptional()
     roles: string ;


}

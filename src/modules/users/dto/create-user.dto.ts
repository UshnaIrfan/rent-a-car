import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Role } from "../../../enums/role.enum";
import {  otpStatus } from "../schemas/user.schema";
import {blockStatus} from "../schemas/user.schema";

export class CreateUserDto {

     @ApiProperty()
     @IsString()
     @IsNotEmpty()
     firstName: string;


     @ApiProperty()
     @IsString()
     @IsNotEmpty()
     lastName: string;


     @ApiProperty()
     @IsString()
     @IsNotEmpty()
     country: string;


     @ApiProperty()
     @IsString()
     @IsNotEmpty()
     dateOfBirth: Date;



     @ApiProperty()
     @IsString()
     @IsNotEmpty()
     phoneNo: string;


     @ApiProperty()
     @IsString()
     @IsNotEmpty()
     image: string;


     @ApiProperty({required: false})
     @IsEmail()
     @IsNotEmpty()
     email: string;


     @ApiProperty({required: true})
     @IsString()
     @IsNotEmpty()
     password: string;


     @ApiProperty({required: true})
     @IsString()
     @IsNotEmpty()
     confirm_password: string;


     @ApiProperty({ required: false, default: Role.CUSTOMER })
     @IsOptional()
     roles: string ;


     @ApiProperty({ type: String, enum: otpStatus, default: otpStatus.INACTIVE })
     @IsString()
     @IsNotEmpty()
     otpStatus:string;




     @ApiProperty({ type: String, enum: blockStatus, default: blockStatus.UNBLOCK })
     @IsString()
     @IsNotEmpty()
     blockStatus: string = blockStatus.UNBLOCK;



}

import { IsEmail, IsNotEmpty, IsOptional, IsString} from "class-validator";
import { Role } from "../../../enums/role.enum";
import {otpStatus} from "../../users/schemas/user.schema";
import {blockStatus} from "../../users/schemas/user.schema";
import { ApiProperty } from "@nestjs/swagger";

export class SignUpUserDto {

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


     @ApiProperty({ required: true  })
     @IsEmail()
     @IsNotEmpty()
     email: string;



     @ApiProperty({ required: true  })
     @IsString()
     @IsNotEmpty()
     password: string;



     @ApiProperty({required: true  })
     @IsString()
     @IsNotEmpty()
     confirm_password: string;



     @ApiProperty({ required: false, default: Role.USER })
     @IsOptional()
     roles: string ;


     @ApiProperty({ type: String, enum: otpStatus, default: otpStatus.INACTIVE })
     @IsString()
     @IsNotEmpty()
     otpStatus: string ;





     @ApiProperty({ type: String, enum: blockStatus, default: blockStatus.UNBLOCK })
     @IsString()
     @IsNotEmpty()
     blockStatus: string = blockStatus.UNBLOCK;



}

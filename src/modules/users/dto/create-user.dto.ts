import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Role } from "../../../enums/role.enum";
import {status} from "../schemas/user.schema";
import {blockStatus} from "../schemas/user.schema";

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



     @ApiProperty({ required: false, default: Role.L2A_USER })
     @IsOptional()
     roles: string ;


     // @ApiProperty({ type: Boolean, default: false ,required: true})
     // @IsBoolean()
     // isActive: boolean;



     @ApiProperty({ type: String, enum: status, default: status.INACTIVE })
     @IsString()
     @IsNotEmpty()
     status: string = status.INACTIVE;



     @ApiProperty({ type: String, enum: status, default: blockStatus.UNBLOCK })
     @IsString()
     @IsNotEmpty()
     blockStatus: string = blockStatus.UNBLOCK;


}

import { IsEmail, IsNotEmpty} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class  changeUserPasswordTokenVerificationDto {

     @ApiProperty({ type: String, required: true })
     @IsEmail()
     @IsNotEmpty()
     email: string;


    @ApiProperty({ type: String, required: true })
    @IsNotEmpty()
    token: string;

}


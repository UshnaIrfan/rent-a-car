import {
  IsEmail,
  IsNotEmpty, IsString
} from "class-validator";
import {status} from "../schemas/contact-us.schema";
import { ApiProperty } from "@nestjs/swagger";

export class createContactUsDto {

    @ApiProperty({ type: String, required: true  })
    @IsEmail()
    @IsNotEmpty()
    email: string;


    @ApiProperty({ type: String, required: true  })
    @IsNotEmpty()
    message: string;


    @ApiProperty({ type: String, enum: status, default: status.PENDING })
    @IsString()
    status: string = status.PENDING;

}

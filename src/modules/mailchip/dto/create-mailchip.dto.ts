import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty
} from "class-validator";

export class MailchipDto {

    @ApiProperty({ type: String, required: true  })
    @IsEmail()
    @IsNotEmpty()
    email: string;

}

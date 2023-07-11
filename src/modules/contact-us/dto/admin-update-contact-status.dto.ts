import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from "class-validator";
export class adminUpdateContactStatusDto {

    @ApiProperty({ type: String, required: true })
    @IsString()
    @IsNotEmpty()
    contactId: string;



    @ApiProperty({ type: String })
    @IsString()
    status: string;

}

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from "class-validator";
export class adminUpdateBlockStatusUserDto {

    @ApiProperty({ type: String, required: true })
    @IsString()
    @IsNotEmpty()
    userId: string;


    @ApiProperty({ type: String })
    @IsString()
    blockStatus: string;

}

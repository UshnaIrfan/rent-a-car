import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class adminUpdateBlockStatusUserDto {

    @ApiProperty({ type: String, required: true })
    @IsString()
    @IsNotEmpty()
    userId: string;


    @ApiProperty({ type: String })
    @IsString()
    blockStatus: string;

}

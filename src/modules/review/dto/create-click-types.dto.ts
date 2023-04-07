import { ApiProperty } from '@nestjs/swagger';
import {
    IsNotEmpty, MaxLength
} from "class-validator";

export class createClickTypesDto {

    @ApiProperty({ type: String, required: true })
    @IsNotEmpty()
    type: string;


    @ApiProperty({ type: String, required: true })
    @IsNotEmpty()
    @MaxLength(10000)
    image: string;


    // @ApiProperty({ type: [String]})
    // clicks: string[];


}


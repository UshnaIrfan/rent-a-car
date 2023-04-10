import { ApiProperty } from '@nestjs/swagger';
import {
    IsNotEmpty
} from "class-validator";


export class createClicksTypesDto {

    @ApiProperty({ type: String, required: true })
    @IsNotEmpty()
    type: string;


}

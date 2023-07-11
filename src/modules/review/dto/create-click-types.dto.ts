import {
    IsNotEmpty
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class createClicksTypesDto {

    @ApiProperty({ type: String, required: true })
    @IsNotEmpty()
    type: string;

}

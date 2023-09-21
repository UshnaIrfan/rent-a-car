import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateCountryDto  {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    countryName: string;
}

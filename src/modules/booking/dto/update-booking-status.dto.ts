import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class updateBookingStatusDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    bookingStatus: string;

}

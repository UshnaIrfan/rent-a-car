import {  IsNotEmpty, IsObject,ValidateNested } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "@nestjs/class-transformer";

class updateProperties {

      @ApiProperty({ type: String})
      @IsNotEmpty()
      firstname: string;


      @ApiProperty({ type: String })
      @IsNotEmpty()
      lastname: string;

}


export class UpdateHubspotDto {

    @ApiProperty()
    @ValidateNested()
    @IsObject()
    @Type(() =>updateProperties )
    properties:updateProperties;

}

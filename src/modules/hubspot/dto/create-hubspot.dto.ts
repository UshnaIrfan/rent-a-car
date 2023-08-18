import {  IsNotEmpty, IsObject,ValidateNested } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "@nestjs/class-transformer";

class createProperties {

      @ApiProperty({ type: String})
      @IsNotEmpty()
      firstname: string;


      @ApiProperty({ type: String })
      @IsNotEmpty()
      lastname: string;



      @ApiProperty({ type: String })
      @IsNotEmpty()
      email: string;


      @ApiProperty({ type: String })
      @IsNotEmpty()
      message: string;

}



export class CreateHubspotDto {

    @ApiProperty()
    @ValidateNested()
    @IsObject()
    @Type(() =>createProperties )
    properties: createProperties;

}

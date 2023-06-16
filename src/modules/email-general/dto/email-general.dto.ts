import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from "class-validator";
export class emailGeneralDto {


      @ApiProperty({ type: String, required: true })
      @IsString()
      @IsNotEmpty()
      email: string;


      @ApiProperty({ type: String, required: true })
      @IsString()
      @IsNotEmpty()
      subject: string;


      @ApiProperty({ type: String, required: true })
      @IsString()
      @IsNotEmpty()
      emailBody: string;


}

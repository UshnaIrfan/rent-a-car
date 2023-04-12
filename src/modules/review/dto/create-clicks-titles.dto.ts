import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty, MaxLength
} from "class-validator";

export class createClicksTitlesDto {


     @ApiProperty({ type: String, required: true })
     @IsNotEmpty()
     slug: string;


     @ApiProperty({ type: String, required: true })
     @IsNotEmpty()
     title: string;


     @ApiProperty({ type: String, required: true })
     @IsNotEmpty()
     type: string;


     @ApiProperty({ type: String, required: true })
     @IsNotEmpty()
     @MaxLength(100000)
     image: string;


  }


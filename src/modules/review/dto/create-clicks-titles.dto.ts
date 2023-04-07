import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty
} from "class-validator";
import slugify from "slugify";
import {Transform} from "@nestjs/class-transformer";


export class createClicksTitlesDto {

     @ApiProperty({ type: String, required: true })
     @IsNotEmpty()
     @Transform(({ value }) => slugify(value.toLowerCase(), { lower: true }))
     slug: string;


}


import {
  IsNotEmpty,
  IsString,
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { documentStatus } from "../../users/schemas/user-document.schema";

export class SignupUserDocumentDto {

      @ApiProperty()
      @IsString()
      @IsNotEmpty()
      userId: string;

      @ApiProperty()
      @IsString()
      @IsNotEmpty()
      type: string;


      @ApiProperty()
      @IsString()
      @IsNotEmpty()
      titleName: string;


      @ApiProperty()
      @IsString()
      @IsNotEmpty()
      image: string;


      @ApiProperty()
      @IsString()
      @IsNotEmpty()
      slug: string;



      @ApiProperty({type: String, enum: documentStatus, default: documentStatus.INACTIVE})
      @IsString()
      @IsNotEmpty()
      documentStatus: string;


}

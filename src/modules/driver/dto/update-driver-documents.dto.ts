import { IsNotEmpty, IsString} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class updateDriverDocumentsDto {


      @ApiProperty()
      @IsString()
      @IsNotEmpty()
      slug: string;


      @ApiProperty()
      @IsString()
      @IsNotEmpty()
      image: string;


}

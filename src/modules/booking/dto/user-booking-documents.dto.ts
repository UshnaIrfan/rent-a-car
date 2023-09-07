import { IsNotEmpty, IsString} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { documentStatus } from "src/modules/user-documents/schemas/userDocuments.schema";

export class userBookingDocumentsDto {

      @ApiProperty()
      @IsString()
      @IsNotEmpty()
      slug: string;


      @ApiProperty()
      @IsString()
      @IsNotEmpty()
      image: string;



      @ApiProperty({type: String, enum: documentStatus, default: documentStatus.PENDING})
      @IsString()
      @IsNotEmpty()
      documentStatus: string;


}

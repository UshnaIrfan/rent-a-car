import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreatePackageDto {

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  packages: string;


}

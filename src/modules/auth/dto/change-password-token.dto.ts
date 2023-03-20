import { ApiProperty } from '@nestjs/swagger';
import {  IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class changePasswordTokenDto {

  @ApiProperty({ type: String, required: true })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(64)
  newPassword: string;

  @ApiProperty({ type: String, required: true })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(64)
  confirmPassword: string;

}

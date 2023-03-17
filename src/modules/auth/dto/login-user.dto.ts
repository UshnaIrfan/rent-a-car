import { ApiProperty } from '@nestjs/swagger';

export default class LoginUserDto {

  @ApiProperty({ type: String, required: true })
  readonly username: string;

  @ApiProperty({ type: String, required: true })
  readonly password: string;
}

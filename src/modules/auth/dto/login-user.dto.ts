import { ApiProperty } from '@nestjs/swagger';

export default class LoginUserDto {
  @ApiProperty()
  readonly username: string;

  @ApiProperty()
  readonly password: string;
}

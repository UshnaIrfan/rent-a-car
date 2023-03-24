import { IsEmail, IsNotEmpty, IsString,IsPhoneNumber} from "class-validator";

export class CreateUserDto {


  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  // @IsPhoneNumber()
  // @IsString()
  // mobile_no: string;
}

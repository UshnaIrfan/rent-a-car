import { Injectable } from "@nestjs/common";
import {UsersRepository} from "./users.repository";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./schemas/user.schema";

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
  ) {}

     async findUserByUsername(username: string): Promise<User | null>
     {
       return this.usersRepository.findUserByUsername(username);
     }


     async findUserByEmail(email: string): Promise<User | null>
     {
      return this.usersRepository.findUserByEmail(email);
     }


     async createUser(user: CreateUserDto): Promise<User | null>
     {
      return this.usersRepository.createUser(user);
     }


     async updatePassword(email: string ,password:string): Promise<User | null>
     {
      return this.usersRepository.updatePassword(email,password);
     }


}

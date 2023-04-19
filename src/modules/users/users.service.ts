import { Injectable } from "@nestjs/common";
import {UsersRepository} from "./users.repository";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./schemas/user.schema";
import updateUserInterface from "../auth/interfaces/update-user.interface";


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



     async findUserByID (id:string): Promise<User | null>
     {
       return this.usersRepository.findUserByID(id);
     }



      // get all users
      async getAllUsers (): Promise<User[]|null>
      {
        return this.usersRepository.getAllUsers( );
      }



      // update user
      async  updateUser (id:string, name:string,username:string,email:string,password:string)
      {
         return this.usersRepository.updateUser(id,name,username,email,password);
      }



      // delete  user
      async deleteUser(id:string): Promise<User|null>
      {
        return this.usersRepository.deleteUser(id);
      }


}

import { Injectable, NotFoundException } from "@nestjs/common";
import {UsersRepository} from "./users.repository";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./schemas/user.schema";
import updateUserInterface from "../auth/interfaces/update-user.interface";
import paginationSellerInterface from "../sellers/interfaces/pagination-seller.interface";
import paginationUserInterface from "../auth/interfaces/pagination-user.interface";


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



      // get all users(pagination)
       async getAllUsers(pageNumber: number):Promise<paginationUserInterface>
       {
          const pageSize = 10;
          const skip = (pageNumber - 1) * pageSize;
          const [result, totalCount] = await this.usersRepository.findAndCount(skip, pageSize);
          const totalPages = Math.ceil(totalCount / pageSize);

          if (result.length === 0)
          {
            throw new NotFoundException('No records found');
          }

        return {
            records: result,
            totalRecords: totalCount,
            totalPages,
            currentPage: pageNumber,
         };
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

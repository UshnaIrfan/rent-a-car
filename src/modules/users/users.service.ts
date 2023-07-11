import { Injectable, NotFoundException } from "@nestjs/common";
import {UsersRepository} from "./users.repository";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./schemas/user.schema";
import paginationUserInterface from "../auth/interfaces/pagination-user.interface";

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
  ) {}


             //ADMIN APIS
            // get all users and search by name (pagination)
              async getAllUsers(pageNumber: number,pageSize?:number,username?:string):Promise<paginationUserInterface>
              {

                   const skip = (pageNumber - 1) * pageSize;
                   const [result, totalCount] = await this.usersRepository.findAndCount(skip, pageSize,username);
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
               async  updateUser (id:string, name:string,username:string,email:string)
               {
                   return this.usersRepository.updateUser(id,name,username,email);
               }



               // user update status ( admin)
               async  adminUpdateUserStatus (userId:string, status:string):Promise<User | null>
               {
                  return this.usersRepository.adminUpdateUserStatus(userId,status);
               }



              // user update  block status ( admin)
              async adminUpdateUserBlockStatus (userId:string, blockStatus:string):Promise<User | null>
              {
                 return this.usersRepository.adminUpdateUserBlockStatus(userId,blockStatus);
              }


              //delete user with review with likeAndDislike
              async deleteUser(id:string): Promise<User|null>
              {
                 return this.usersRepository.deleteUser(id);
              }



             // calculate user each week and each month
             async getUserDetails(start?: string, end ?: string)
             {
                   const  result=await this.usersRepository.getUserDetails(start,end);
                   return result
             }



             //FRONTEND APIS
              // find user by name
              async findUserByUsername(username: string): Promise<User | null>
              {
                 return this.usersRepository.findUserByUsername(username);
              }


            // find user by email
             async findUserByEmail(email: string): Promise<User | null>
             {
                 return this.usersRepository.findUserByEmail(email);
             }


              // create user
             async createUser(user: CreateUserDto): Promise<User | null>
             {
                 return this.usersRepository.createUser(user);
             }


             // update password
             async updatePassword(email: string ,password:string): Promise<User | null>
             {
                return this.usersRepository.updatePassword(email,password);
             }


            // user update ( active status)
            async isActive(email: string,status:string): Promise<User | null>
            {
               return this.usersRepository.isActive(email,status);
            }


            // get all users
            async getAllUser():Promise<User[]>
            {
                 const users =await this.usersRepository.getAllUser();
                 if(!users)
                 {
                    throw new NotFoundException('No user exit');
                 }
                 return  users;
             }



            // get user by id  with active status
            async findUserById (id:string): Promise<User | null>
            {
                return this.usersRepository.findUserById(id);
            }


 }

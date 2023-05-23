import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from "typeorm";
import { CreateUserDto } from './dto/create-user.dto';
import { User } from "./schemas/user.schema";
import {reviewRepository} from "../review/respositories/review.respository";


@Injectable()
export class UsersRepository {
  constructor(@InjectRepository(User) private userModel: Repository<User>,
              private readonly ReviewRepository:reviewRepository
              ) {}




       //ADMIN APIS
       //update user
       async updateUser(id:string, name:string,username:string,email:string): Promise<User | null>
       {
          const user = await this.userModel.findOne({ where: { id}});
          if (!user)
          {
                return null
          }

          user.name = name;
          user.username = username;
          user.email = email;
          return this.userModel.save(user);
       }




        //delete user with review with likeAndDislike
        async deleteUser(id: string): Promise<User| null>
        {
          const User = await this.userModel.findOne({ where: { id  }});
          if(!User)
          {
              throw new NotFoundException('user not found');
          }
          if (User.roles !== 'l2a_user')
          {
              throw new NotFoundException('You cannot delete an admin user.');
          }

            const user = await this.userModel.findOne({
                where: { id  },
                relations: ['review'],
             });


             const reviews = user.review;
             if (reviews && reviews.length > 0)
             {
                for (const review of reviews)
                {
                    await this.ReviewRepository.delete(review.id);
                }
             }
             const result = await this.userModel.remove(user);
             return  result

        }




        // get all users and search by name (pagination)
        async findAndCount(skip: number, take: number,username?:string): Promise<[User[], number]>
        {
            const whereConditions: any[] = [];
            if (username)
            {
               whereConditions.push({
              username: Like(`${username}%`)});
            }

            const [result, totalCount] = await this.userModel.findAndCount({
            where: whereConditions,
            skip,
            take,
            order: { username: 'ASC' },
          });

           if (!result.length)
           {
              throw new NotFoundException('No user were found matching the criteria.');
           }
             return [result, totalCount];
        }






        //FRONTEND APIS
        async createUser(createUserDto: CreateUserDto): Promise<User | null>
        {
           return this.userModel.save(createUserDto);
        }



        async findUserByUsername(username: string): Promise<User | null>
        {
             return this.userModel.findOne({ where: { username }});
        }




        async findUserByEmail(email: string): Promise<User | null>
        {
           return this.userModel.findOne({ where: { email }});
        }



        async findUserByID(id: string): Promise<User|null>
        {
            return this.userModel.findOne({ where: { id }, });
        }




         async updatePassword(email: string, password: string): Promise<User| null>
         {
            const user = await this.userModel.findOne({ where: { email } });
            if (!user)
            {
                return null
            }
             user.password = password;
             return this.userModel.save(user);
         }


          // get all users
         async getAllUsers(): Promise<User[]|null>
         {
             return this.userModel.find();
         }




         async isActive(email: string, isActive: boolean): Promise<User| null>
         {
            const user = await this.userModel.findOne({ where: { email } });
            if (!user)
            {
               return null
            }
           user.isActive = isActive;
           return this.userModel.save(user);
       }



         // get all users
         async getAllUser()
         {
             return  this.userModel.find({ where: { isActive:true }});
         }




          // get user by id  with active status
         async findUserById(id: string): Promise<User|null>
         {
              return this.userModel.findOne({ where: { id ,isActive:true} });
         }


  }

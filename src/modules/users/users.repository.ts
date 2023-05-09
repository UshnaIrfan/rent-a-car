// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { User, UserDocument } from "./schemas/user.schema";
// import { CreateUserDto } from "./dto/create-user.dto";
//
// @Injectable()
// export class UsersRepository {
//   constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
//
//       async createUser(user: CreateUserDto): Promise<any> {
//       return this.userModel.create(user);
//      }
//
//        async findUserByUsername(username: string): Promise<User | null> {
//        return this.userModel.findOne({
//          username,
//        });
//      }
//
//       async findUserByEmail(email: string): Promise<User | null> {
//       return this.userModel.findOne({
//         email,
//       });
//     }
//
//
//       async updatePassword(email: string, password: string): Promise<User | null>
//       {
//        const filter = { email: email };
//        const options = { upset: true };
//        const updateDoc = {
//       $set: {
//         password: password
//        },
//      };
//        return this.userModel.findOneAndUpdate(filter, updateDoc, options);
//     }
//
// }
//typeorm
import { Injectable} from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from "./schemas/user.schema";
import {reviewRepository} from "../review/respositories/review.respository";
import { status } from "../categories/schemas/category.schema";


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




        //delete user  with review
        async deleteUser(id: string): Promise<User| null>
        {

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




       // get all users(pagination)
        async findAndCount(skip: number, take: number): Promise<[User[], number]>
        {
           const [result, totalCount] = await this.userModel.findAndCount({
           skip,
           take,
          order: {username: 'ASC' }
          });
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



        async findUserByID(id: string): Promise<User | null>
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
         async getAllUser(): Promise<User[]|null>
         {

            return  this.userModel.find({
            where: { isActive:true }
            });

         }




  }

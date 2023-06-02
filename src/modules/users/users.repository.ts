import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Like, Repository } from "typeorm";
import { CreateUserDto } from './dto/create-user.dto';
import { User } from "./schemas/user.schema";
import {reviewRepository} from "../review/respositories/review.respository";
import * as moment from "moment";


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



        // admin user update status
        async adminUpdateUserStatus(userId:string,status:string):Promise<User | null>
        {
            const user = await this.userModel.findOne({ where: { id:userId}});
            if (!user)
            {
                return null
            }
             user.status=status;
             return this.userModel.save(user);
       }




        // admin user update  block status
        async adminUpdateUserBlockStatus(userId:string,blockStatus:string):Promise<User | null>
        {
             const user = await this.userModel.findOne({ where: { id:userId}});
             if (!user)
             {
                return null
             }

             if (user.roles === 'l2a_admin')
             {
                 throw new UnauthorizedException(' You cannot change status for an admin');
             }

             console.log(user.roles)


               user.blockStatus=blockStatus;
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





     //      // calculate user each week and each month
     //      async getUserDetails(startDate?: string ,endDate?: string)
     //      {
     //
     //        let query = {};
     //        if (startDate && endDate) {
     //
     //          const start = moment(startDate, 'YYYY-MM-DD').startOf('week').toDate();
     //          const end = moment(endDate, 'YYYY-MM-DD').endOf('week').toDate();
     //          console.log("start" ,start)
     //          console.log("end" ,end)
     //             query = {
     //             createdAt: {
     //               $gte: start,
     //               $lte: end,
     //            },
     //          };
     //
     //          return this.userModel.find({
     //            where:query
     //          });
     //        }
     //
     //         // return this.userModel.find();
     //
     // }

          async getUserDetails(startDate?: string, endDate?: string)
          {
            let query = {};
            const start = moment(startDate, 'YYYY-MM-DD').startOf('day').toDate();
            const end = moment(endDate, 'YYYY-MM-DD').endOf('day').toDate();
            query = {
              createdAt: Between(start, end)
            };

            const users = await this.userModel.find({ where: query });

            const result = {};
            const currentDate = moment(start);
            const lastDate = moment(end);

            while (currentDate.isSameOrBefore(lastDate))
            {
              const formattedDate = currentDate.format('YYYY-MM-DD');
              result[formattedDate] = 0;

              for (const user of users)
              {
                const userDate = moment(user.createdAt).format('YYYY-MM-DD');
                if (userDate === formattedDate)
                {
                  result[formattedDate]++;
                }
              }

              currentDate.add(1, 'day');
            }

            return result;
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




         async isActive(email: string, status: string): Promise<User| null>
         {
            const user = await this.userModel.findOne({ where: { email } });
            if (!user)
            {
               return null
            }
        //  user.isActive = isActive;
           user.status = 'active';
           return this.userModel.save(user);
       }



         // get all users
         async getAllUser()
         {
             // return  this.userModel.find({ where: { isActive:true }});
           return  this.userModel.find({ where: { status:'active' }});
         }




          // get user by id  with active status
         async findUserById(id: string): Promise<User|null>
         {
              // return this.userModel.findOne({ where: { id ,isActive:true} });
           return this.userModel.findOne({ where: { id ,status:'active'} });
         }


  }

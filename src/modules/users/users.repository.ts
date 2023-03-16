import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from "./schemas/user.schema";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UsersRepository {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async createUser(user: CreateUserDto): Promise<any> {
    return this.userModel.create(user);
  }

    async findUserByUsername(username: string): Promise<User | null> {
    return this.userModel.findOne({
      username,
    });
  }

    async findUserByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({
      email,
    });
  }

   async updatePassword(email: string, password: string): Promise<User | null>
   {
    const filter = { email: email };
    const options = { upset: true };
    const updateDoc = {
      $set: {
        password: password
      },
    };
    return this.userModel.findOneAndUpdate(filter, updateDoc, options);
  }




}

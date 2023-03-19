import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {UsersRepository} from "./users.repository";
import { User, UserSchema } from "./schemas/user.schema";
import { MongooseModule } from "@nestjs/mongoose";
//import {User} from "./schemas/user.schema";
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
       MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
    ]),


  //    TypeOrmModule.forFeature([User]),

  ],
     controllers: [UsersController],
     providers: [UsersService ,UsersRepository],
     exports: [
    UsersRepository,
    UsersService,
  ],
})
export class UsersModule {}

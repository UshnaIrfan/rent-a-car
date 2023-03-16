import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {UsersRepository} from "./users.repository";
import { User, UserSchema } from "./schemas/user.schema";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
       MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
    ]),
  ],
   controllers: [UsersController],
   providers: [UsersService ,UsersRepository],
   exports: [
    UsersRepository,
    UsersService,
  ],
})
export class UsersModule {}

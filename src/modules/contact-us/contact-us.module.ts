import { Module } from '@nestjs/common';
import { ContactUsService } from './contact-us.service';
import { ContactUsController } from './contact-us.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import {contact} from "./schemas/contact-us.schema";
import {contactUsRepository} from "./contact-us.repository";
import { JwtService } from "@nestjs/jwt";
import {UsersRepository} from "../users/users.repository";
import {User} from "../users/schemas/user.schema";


@Module({
  imports: [TypeOrmModule.forFeature([contact,User])],
  controllers: [ContactUsController],
  providers: [JwtService,ContactUsService ,contactUsRepository,UsersRepository]
})
export class ContactUsModule {}

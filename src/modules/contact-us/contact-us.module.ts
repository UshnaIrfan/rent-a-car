import { Module } from '@nestjs/common';
import { ContactUsService } from './contact-us.service';
import { ContactUsController } from './contact-us.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import {contact} from "./schemas/contact-us.schema";
import {contactUsRepository} from "./contact-us.repository";


@Module({
  imports: [TypeOrmModule.forFeature([contact])],
  controllers: [ContactUsController],
  providers: [ContactUsService ,contactUsRepository]
})
export class ContactUsModule {}

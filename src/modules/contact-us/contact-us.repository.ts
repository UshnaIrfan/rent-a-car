import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from "typeorm";
import {createContactUsDto} from "./dto/create-contact-us.dto";
import {contact} from "./schemas/contact-us.schema";
import { User } from "../users/schemas/user.schema";


@Injectable()
export class contactUsRepository{
  constructor(@InjectRepository(contact) private contactModel: Repository<contact>
  ) {}



      // contact-us
      async createContact(contactUs: createContactUsDto): Promise<contact| null>
      {
          return this.contactModel.save(contactUs);
      }





        //get all contactus users
        async findAndCount(skip: number, take: number): Promise<[contact[], number]>
        {
            const whereConditions: any[] = [];
            const [result, totalCount] = await this.contactModel.findAndCount({
               where: whereConditions,
               skip,
               take,
             });

           return [result, totalCount];
       }



}


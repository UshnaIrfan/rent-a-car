import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import {  Repository } from "typeorm";
import {createContactUsDto} from "./dto/create-contact-us.dto";
import {contact} from "./schemas/contact-us.schema";


@Injectable()
export class contactUsRepository{
  constructor(@InjectRepository(contact) private contactModel: Repository<contact>
  ) {}


      // FRONTEND API
      // contact-us
      async createContact(contactUs: createContactUsDto): Promise<contact| null>
      {
          return this.contactModel.save(contactUs);
      }




        // ADMIN API
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




      //  update contact us status
      async adminUpdateContactStatus(contactId:string, status:string): Promise<contact| null>
      {
           const contact = await this.contactModel.findOne({ where: { id:contactId}});
           if (!contact)
           {
               return null
           }

          contact.status = status;
          return this.contactModel.save(contact);
      }

}


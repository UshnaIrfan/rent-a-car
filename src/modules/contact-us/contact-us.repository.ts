import { Injectable} from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {createContactUsDto} from "./dto/create-contact-us.dto";
import {contact} from "./schemas/contact-us.schema";


@Injectable()
export class contactUsRepository{
  constructor(@InjectRepository(contact) private contactModel: Repository<contact>
  ) {}



      // contact-us
      async createContact(contactUs: createContactUsDto): Promise<contact| null>
      {
         return this.contactModel.save(contactUs);
      }

}


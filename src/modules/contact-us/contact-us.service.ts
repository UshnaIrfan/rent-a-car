import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import createContactUsInterface from "./interfaces/create-contact-us.interface";
import {contactUsRepository} from "./contact-us.repository";
import paginationContactInterface from "./interfaces/paginationContactInterface";


@Injectable()
export class ContactUsService {
  constructor(private readonly contactUsRepository:contactUsRepository) {}



      // contact-us
     async createContact(contactUsInterface:createContactUsInterface): Promise<{message: string ,contact}>
     {

        try
        {
          const contact = await this.contactUsRepository.createContact(contactUsInterface);
          return{
             message: 'Your message is sent successfully. Our team will contact you soon.',
             contact
          };
        }
        catch (error)
        {
           throw new InternalServerErrorException('Failed to send your message. Please try again later');
        }
     }







          //get all contactus users
       async getAllContactUsUsers(pageNumber: number,pageSize?:number):Promise<paginationContactInterface>
       {
           //const pageSize = 10;
           // var pageSize = pageSize || 10;
           const skip = (pageNumber - 1) * pageSize;
           const [result, totalCount] = await this.contactUsRepository.findAndCount(skip, pageSize);
           const totalPages = Math.ceil(totalCount / pageSize);

         if (result.length === 0)
         {
             throw new NotFoundException('No records found');
         }

        return {
            records: result,
            totalRecords: totalCount,
            totalPages,
            currentPage: pageNumber,
         };
     }



}

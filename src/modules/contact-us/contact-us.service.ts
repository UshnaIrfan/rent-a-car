import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import createContactUsInterface from "./interfaces/create-contact-us.interface";
import {contactUsRepository} from "./contact-us.repository";
import paginationContactInterface from "./interfaces/paginationContactInterface";
import adminUpdateContactStatusInterface from "./interfaces/admin-update-contact-status.interface";
import { contact } from "./schemas/contact-us.schema";

@Injectable()
export class ContactUsService {
  constructor(private readonly contactUsRepository:contactUsRepository) {}


      // FRONT-END API
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





        // ADMIN API
        //get all contactus users
       async getAllContactUsUsers(pageNumber: number,pageSize?:number,email?: string):Promise<paginationContactInterface>
       {

           const skip = (pageNumber - 1) * pageSize;
           const [result, totalCount] = await this.contactUsRepository.findAndCount(skip, pageSize,email);
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




         //  update contact us status
         async  adminUpdateContactStatus(body:adminUpdateContactStatusInterface):Promise<{ update:contact; message: string }>
         {

              const update = await this.contactUsRepository.adminUpdateContactStatus(body.contactId,body.status);
              if (!update)
              {
                   throw new NotFoundException('invalid id');
              }
             return { message: "contact us status updated successfully", update};
       }

}

import { Injectable, InternalServerErrorException } from "@nestjs/common";
import createContactUsInterface from "./interfaces/create-contact-us.interface";
import {contactUsRepository} from "./contact-us.repository";
import {MailerService} from "@nestjs-modules/mailer";
import { ConfigService } from '@nestjs/config';


@Injectable()
export class ContactUsService {
  constructor(
    private readonly contactUsRepository:contactUsRepository,
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService,

  ) {}


    // contact-us
     async createContact(contactUsInterface:createContactUsInterface): Promise<{message: string, contact}>
     {

        try
        {
          const contact = await this.contactUsRepository.createContact(contactUsInterface);
          await this.sendContactMessageEmail(contactUsInterface.email, contactUsInterface.message);
          return{
             message: 'Your message is sent successfully. Our team will contact you soon.',
             contact,
          };
        }
        catch (error)
         {
           throw new InternalServerErrorException('Failed to send your message. Please try again later');
         }
     }





       async sendContactMessageEmail(email: string, message: string)
       {
           console.log("email", email)
           const toEmail = this.configService.get('ADMIN_EMAIL');
           await this.mailerService.sendMail({
                from: email,
                to:toEmail,
                subject: 'Love to Air',
                text: message,
          });
       }


}

import { Body, CACHE_MANAGER, ConflictException, Inject, Injectable } from "@nestjs/common";
import emailGeneralInterface from "./interface/email-general.interface";
import {MailerService} from "@nestjs-modules/mailer";

@Injectable()
export class emailGeneralService {
  constructor(
    private readonly mailerService: MailerService
  ) {}


        async emailSend(@Body() body: emailGeneralInterface)
        {
           try
           {
             await this.sendEmailGeneral(body.email,body.emailBody);
             return { success: true, message: 'Email sent successfully' };
          }
          catch (error)
          {
              console.error('Error sending email:', error);
              return { success: false, message: 'Failed to send email' };
          }
        }





       async sendEmailGeneral(email: string,emailBody:string)
       {
                await this.mailerService.sendMail({
                to: email,
                subject: 'admin response',
                html:emailBody
              // text: emailBody,

        });
     }


}

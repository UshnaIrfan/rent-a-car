import { Injectable } from "@nestjs/common";
import MailchipInterface from "./interfaces/create-mailchip.interface";
import {MailChipRepository} from "./mailchip.repository";
import handlebars from "handlebars";
import * as fs from 'fs';
import {MailerService} from "@nestjs-modules/mailer";
import { mailChip } from "./schemas/mailchip.schema";

@Injectable()
export class MailchipService {
  constructor(private readonly MailchipRepository: MailChipRepository,
              private readonly mailerService: MailerService
  ) {}

        // mail chip
        async createMailChip(createMailChipInterface: MailchipInterface):Promise<mailChip>
        {
            const mailChip = await this.MailchipRepository.createMailChip(createMailChipInterface);
            return mailChip
        }



      // get mail chip ( sending email)
       async getMailChip()
       {

            let mailChip = await this.MailchipRepository.getMailChip();
            try
            {
                 for (const mailChipUsers of mailChip)
                 {

                    this.mailChipUser(mailChipUsers.email);
                 }
                 return { success: true, message: 'Emails sent successfully'};
            }
            catch(error)
            {
                return { success: false, message: 'Failed to send emails' };
            }
      }






      //  Reward Announcement Email
        async mailChipUser(email: string)
        {
            const template = handlebars.compile(fs.readFileSync('src/templates/mailchipEmail.html', 'utf8'));
            const html = template({});
            return  this.mailerService.sendMail({
              to: email,
              subject: 'mail-chip user',
              html: html,
            });
        }




}

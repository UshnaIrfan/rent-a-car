import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import {  Repository } from "typeorm";
import {MailchipDto} from "./dto/create-mailchip.dto";
import {mailChip} from "./schemas/mailchip.schema";


@Injectable()
export class MailChipRepository{
  constructor(@InjectRepository(mailChip) private mailChipModel: Repository<mailChip>
  ) {}


       // mail chip
      async createMailChip(mailchip: MailchipDto): Promise<mailChip| null>
      {
          return this.mailChipModel.save(mailchip);
      }


      //  get mail chip ( sending email)
      async getMailChip(): Promise<mailChip[]| null>
      {
          return this.mailChipModel.find();
      }

}


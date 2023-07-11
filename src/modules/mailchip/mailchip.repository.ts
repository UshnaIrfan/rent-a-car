import { Injectable } from "@nestjs/common";
import {  Repository } from "typeorm";
import {MailchipDto} from "./dto/create-mailchip.dto";
import {mailChip} from "./schemas/mailchip.schema";
import { InjectRepository } from "@nestjs/typeorm";


@Injectable()
export class MailChipRepository{
  constructor(@InjectRepository(mailChip) private mailChipModel: Repository<mailChip>
  ) {}


         //  create mail chip data
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


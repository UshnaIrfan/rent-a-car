import { Controller,  Post, Body} from '@nestjs/common';
import { ContactUsService } from './contact-us.service';
import  {createContactUsDto} from "./dto/create-contact-us.dto";
import { ApiBody, ApiTags } from "@nestjs/swagger";

@ApiTags('contact-us')
@Controller('contact-us')
export class ContactUsController {
  constructor(private readonly contactUsService: ContactUsService) {}


     // contact-us
      @ApiBody({type:createContactUsDto})
      @Post('contact_us')
      async create(
      @Body() contactUsDto: createContactUsDto):Promise<{message: string, contact}>
      {
        return this.contactUsService.createContact(contactUsDto);
      }



}

import { Controller, Post, Body, Req } from "@nestjs/common";
import { ContactUsService } from './contact-us.service';
import  {createContactUsDto} from "./dto/create-contact-us.dto";
import { ApiBearerAuth, ApiBody, ApiTags } from "@nestjs/swagger";

@ApiTags('Contact-us')
@Controller('contact-us')
export class ContactUsController {
  constructor(private readonly contactUsService: ContactUsService) {}


     // contact-us
      @ApiBody({type:createContactUsDto})
      @Post('create')
      async create(
      @Body() contactUsDto: createContactUsDto):Promise<{message: string, contact}>
      {
         return this.contactUsService.createContact(contactUsDto );
      }



}
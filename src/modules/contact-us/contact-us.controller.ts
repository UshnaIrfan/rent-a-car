import { Controller, Post, Body } from "@nestjs/common";
import  {createContactUsDto} from "./dto/create-contact-us.dto";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { ContactUsService } from "./contact-us.service";

@ApiTags('Contact-us')
@Controller('contact-us')
export class ContactUsController {
  constructor(private readonly contactUsService: ContactUsService) {}


     // contact-us
      @ApiBody({type:createContactUsDto})
      @Post('create')
      async create(
      @Body() contactUsDto: createContactUsDto):Promise<{message: string}>
      {
         return this.contactUsService.createContact(contactUsDto );
      }



}

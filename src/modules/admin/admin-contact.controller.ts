import { Controller, Get, Query } from "@nestjs/common";
import { ApiBearerAuth,  ApiQuery, ApiTags } from "@nestjs/swagger";
import paginationContactInterface from "../contact-us/interfaces/paginationContactInterface";
import { Role } from "../../enums/role.enum";
import { Roles } from "../../decorators/role.decorators";
import {ContactUsService } from "../contact-us/contact-us.service";
import paginationUserInterface from "../auth/interfaces/pagination-user.interface";


@ApiTags('admin')
@Controller('admin')
export class adminContactController {
  constructor(private readonly contactUsService:ContactUsService) {}



       //get all contactus users
       @ApiBearerAuth()
       @Get('/contact/:all_user')
       @Roles(Role.L2A_ADMIN)
       async getAllContactUsUsers(@Query('page') page: number = 1):Promise<paginationContactInterface>
       {
            return this.contactUsService.getAllContactUsUsers(page);
       }




}

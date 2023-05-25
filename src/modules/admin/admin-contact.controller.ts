import { Body, Controller, Get, Patch, Query } from "@nestjs/common";
import { ApiBearerAuth, ApiBody, ApiQuery, ApiTags } from "@nestjs/swagger";
import paginationContactInterface from "../contact-us/interfaces/paginationContactInterface";
import { Role } from "../../enums/role.enum";
import { Roles } from "../../decorators/role.decorators";
import {ContactUsService } from "../contact-us/contact-us.service";
import {adminUpdateContactStatusDto} from "../contact-us/dto/admin-update-contact-status.dto";

@ApiTags('admin')
@Controller('admin')
export class adminContactController {
  constructor(private readonly contactUsService:ContactUsService) {}



       //get all contactus users
       @ApiBearerAuth()
       @ApiQuery({ name: 'page', type: Number, required: true })
       @ApiQuery({ name: 'pageSize', type: Number, required:false})
       @Get('/contact/:all_user')
       @Roles(Role.L2A_ADMIN)
       async getAllContactUsUsers(@Query('page') page: number = 1,@Query('pageSize') pageSize: number =10):Promise<paginationContactInterface>
       {
            return this.contactUsService.getAllContactUsUsers(page,pageSize);
       }




       //  update contact us status
       @ApiBearerAuth()
       @ApiBody({type:adminUpdateContactStatusDto})
       @Patch('/contact/update/status')
       @Roles(Role.L2A_ADMIN)
       async adminUpdateContactStatus(@Body() body:adminUpdateContactStatusDto)
       {
          return this.contactUsService.adminUpdateContactStatus(body);
       }





}

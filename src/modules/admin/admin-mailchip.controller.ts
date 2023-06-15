import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import {MailchipDto} from "../mailchip/dto/create-mailchip.dto";
import { ApiBearerAuth, ApiBody, ApiTags } from "@nestjs/swagger";
import {mailChip} from "../mailchip/schemas/mailchip.schema";
import { MailchipService } from "../mailchip/mailchip.service";
import { Roles } from "../../decorators/role.decorators";
import { Role } from "../../enums/role.enum";

@ApiTags('admin')
@Controller('admin')
export class MailchipController {
  constructor(private readonly mailchipService: MailchipService) {}


      // mail chip
      @ApiBearerAuth()
      @ApiBody({type:MailchipDto})
      @Post('mailchip/create')
      @Roles(Role.L2A_ADMIN)
      async createMailChip(@Body() createMailChip:MailchipDto): Promise<mailChip>
      {
        return this.mailchipService.createMailChip(createMailChip );
      }



      //  get mail chip ( sending email)
      @ApiBearerAuth()
      @Get('mailchip/user/email')
      @Roles(Role.L2A_ADMIN)
      async getMailChip()
      {
        return this.mailchipService.getMailChip();
      }
}

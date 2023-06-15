import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MailchipService } from './mailchip.service';
import {MailchipDto} from "./dto/create-mailchip.dto";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { mailChip } from "./schemas/mailchip.schema";


@ApiTags('mail-chip')
@Controller('mail-chip')
export class MailchipController {
  constructor(private readonly mailchipService: MailchipService) {}


        // mail chip
        @ApiBody({type:MailchipDto})
        @Post('create')
        async createMailChip(@Body() createMailChip:MailchipDto): Promise<mailChip>
        {
            return this.mailchipService.createMailChip(createMailChip );
        }



        //  get mail chip ( sending email)
        @Get('user/email')
        async getMailChip()
        {
            return this.mailchipService.getMailChip();
        }
}

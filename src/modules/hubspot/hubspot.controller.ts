import { Controller, Get, Post, Body,  Patch, Delete, Query } from "@nestjs/common";
import { HubspotService } from './hubspot.service';
import { ApiBody,  ApiQuery, ApiTags } from "@nestjs/swagger";
import {CreateHubspotDto} from "./dto/create-hubspot.dto";
import {UpdateHubspotDto} from "./dto/update-hubspot.dto";


@ApiTags('hubspot')
@Controller('hubspot')
export class HubspotController {
  constructor(private readonly hubspotService: HubspotService) {}



      // create
      @ApiBody({type:CreateHubspotDto})
      @Post('contact')
      async hubspotContact(@Body() body: CreateHubspotDto)
      {
          return this.hubspotService.hubspotContact(body);
      }



      // get all
      @Get('contacts')
      async getContacts()
      {
            return this.hubspotService.getContacts();
      }



      // get data form email
      @ApiQuery({ name: 'email', required:false})
      @Get(":email")
      async getContactByEmail(@Query('email')email: string)
      {
            return this.hubspotService.getHubspotContactByEmail(email);
      }



      // delete data
      @ApiQuery({ name: 'email', required:true})
      @Delete ("delete")
      async deleteHubspotContactByEmail(@Query('email')email: string)
      {
          return this.hubspotService.deleteHubspotContactByEmail(email);
      }


     // update data
      @ApiQuery({ name: 'id', required:true})
      @Patch('update/:id')
      async updateHubspotContactByEmail(@Query('id')id: string, @Body() updateData: UpdateHubspotDto)
      {
          return this.hubspotService.updateHubspotContactByEmail(id, updateData);
      }

}

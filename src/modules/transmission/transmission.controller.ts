import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransmissionService } from './transmission.service';
import { CreateTransmissionDto } from './dto/create-transmission.dto';
import { UpdateTransmissionDto } from './dto/update-transmission.dto';
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { CreateSeatsCapacityDto } from "../seats-capacity/dto/create-seats-capacity.dto";
import { seatsCapacity } from "../seats-capacity/schemas/seats-capacity.schema";
import { UpdateSeatsCapacityDto } from "../seats-capacity/dto/update-seats-capacity.dto";
import { transmission } from "./schemas/transmission.schema";



@ApiTags('transmission')
@Controller('transmission')
export class TransmissionController {
  constructor(private readonly transmissionService: TransmissionService) {}




      // create
      @ApiBody({type:CreateTransmissionDto})
      @Post('create')
      async createTransmission(@Body() createTransmissionDto: CreateTransmissionDto):Promise<transmission>
      {
        return this.transmissionService.createTransmission(createTransmissionDto);
      }



      // get all  transmission
      @Get('all')
      async  getTransmission():Promise<transmission[]>
      {
        return this.transmissionService.getTransmission();
      }


     // update  transmission
      @Patch('/:transmissionId')
      async  updateTransmission(@Param('transmissionId') transmissionId:string, @Body() body:UpdateTransmissionDto )
      {
        return this.transmissionService.updateTransmission(transmissionId,body);
      }



      // delete transmission
      @Delete('/:transmissionId')
      async  deleteTransmission(@Param('transmissionId') transmissionId:string )
      {
        return this.transmissionService.deleteTransmission(transmissionId,);
      }


}

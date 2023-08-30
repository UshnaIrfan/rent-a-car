import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeatsCapacityService } from './seats-capacity.service';
import { CreateSeatsCapacityDto } from './dto/create-seats-capacity.dto';
import { UpdateSeatsCapacityDto } from './dto/update-seats-capacity.dto';
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { seatsCapacity } from "./schemas/seats-capacity.schema";


@ApiTags('seatsCapacity')
@Controller('seats-capacity')
export class SeatsCapacityController {
  constructor(private readonly seatsCapacityService: SeatsCapacityService) {}

        // create
        @ApiBody({type:CreateSeatsCapacityDto})
        @Post('create')
        async createSeatsCapacity(@Body() createSeatsCapacityDto: CreateSeatsCapacityDto)
        {
          return this.seatsCapacityService.createSeatsCapacity(createSeatsCapacityDto);
        }


        // get all  seats  Capacity
        @Get('all')
        async  getSeatsCapacity(): Promise<seatsCapacity[]>
        {
          return this.seatsCapacityService.getSeatsCapacity();
        }


         // update  seats  Capacity
        @Patch('/:seatsCapacityId')
        async  updateSeatsCapacity(@Param('seatsCapacityId') seatsCapacityId:string, @Body() body:UpdateSeatsCapacityDto )
        {
          return this.seatsCapacityService.updateSeatsCapacity(seatsCapacityId,body);
        }


        // delete  seats  Capacity
        @Delete('/:seatsCapacityId')
        async  deleteSeatsCapacity(@Param('seatsCapacityId') seatsCapacityId:string )
        {
          return this.seatsCapacityService.deleteSeatsCapacity(seatsCapacityId,);
        }

}

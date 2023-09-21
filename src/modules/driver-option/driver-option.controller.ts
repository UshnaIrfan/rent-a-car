// import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
// import { DriverOptionService } from './driver-option.service';
// import { CreateDriverOptionDto } from './dto/create-driver-option.dto';
// import { UpdateDriverOptionDto } from './dto/update-driver-option.dto';
// import { ApiBody, ApiTags } from "@nestjs/swagger";
// import { driverOption } from "./schemas/driver-option.schema";
// import { updateDriverDocumentsDto } from "../driver/dto/update-driver-documents.dto";
//
//
//
// @ApiTags('driverOption')
// @Controller('driver-option')
// export class DriverOptionController {
//   constructor(private readonly driverOptionService: DriverOptionService) {}
//
//
//
//         // create
//         @ApiBody({type:CreateDriverOptionDto})
//         @Post('create')
//         async createDriverOption(@Body() createDriverOptionDto: CreateDriverOptionDto)
//         {
//           return this.driverOptionService.createDriverOption(createDriverOptionDto);
//         }
//
//
//
//         // get all  driver  Option
//         @Get('all')
//         async  getDriverOption():Promise<driverOption[]>
//         {
//             return this.driverOptionService.getDriverOption();
//         }
//
//
//        // update  driver  Option
//         @Patch('/:driverOptionId')
//         async  updateDriverOptionById(@Param('driverOptionId') driverOptionId:string, @Body() body:UpdateDriverOptionDto )
//         {
//           return this.driverOptionService.updateDriverOptionById(driverOptionId,body);
//         }
//
//
//
//         // delete  driver  Option
//         @Delete('/:driverOptionId')
//         async  deleteDriverOption(@Param('driverOptionId') driverOptionId:string )
//         {
//           return this.driverOptionService.deleteDriverOption(driverOptionId,);
//         }
//
// }

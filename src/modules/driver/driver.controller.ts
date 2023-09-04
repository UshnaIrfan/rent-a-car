import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UsePipes,
  ParseUUIDPipe,
  Query,
  UseGuards,
  Req, Injectable, Scope, Delete
} from "@nestjs/common";
import { DriverService } from './driver.service';
import { ApiBearerAuth, ApiBody, ApiQuery, ApiTags } from "@nestjs/swagger";
import { createDriverDto } from "./dto/create-driver.dto";
import { driver } from "./schemas/driver.schema";
import { driverDocumentsDto } from "./dto/driver-documents.dto";
import {updateDriverDocumentsDto} from "./dto/update-driver-documents.dto";
import { SwaggerUpdateDriverDocumentsDocorator } from "./swagger-decorator/update-driver-douments-decorators";
import { SwaggerGetDriver } from "./swagger-decorator/get-driver-decorator";
import { Roles } from "../../decorators/role.decorators";
import { Role } from "../../enums/role.enum";
import { getAllDriversRenterDecorators } from "./swagger-decorator/get-all-drivers-renter-decorators";
import { getDriverHistoryRenterDecorators } from "./swagger-decorator/get-driver-history-renter-decorators";
import {  UserAuthGuard } from "../../guards/user-auth-guard";


@ApiTags('driver')
@Controller('driver')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}


        // create
        @ApiBearerAuth()
        @ApiBody({type:createDriverDto})
        @Post('create')
        @Roles(Role.RENTER)
        @UseGuards(UserAuthGuard)
        async create(@Body() CreateDriverDto:createDriverDto, @Req() request: any):Promise<driver>
        {
           return this.driverService.createDriver(CreateDriverDto,request.user.id);
        }


        //  international user document passport
        @ApiBody({type:driverDocumentsDto})
        @Post('/international/user_document_passport')
        async internationalUserDocumentPassport(@Body() body:driverDocumentsDto )
        {
           return this.driverService.UserDocument(body);
        }



        // international user document visa
        @ApiBody({type:driverDocumentsDto})
        @Post('/international/user_document_visa')
        async internationalUserDocumentVisa(@Body() body:driverDocumentsDto )
        {
          return this.driverService.UserDocument(body);
        }



        //  international user driving license
        @ApiBody({type:driverDocumentsDto})
        @Post('/international/user_document_driving_license')
        async internationalUserDocumentDrivingLicense(@Body() body:driverDocumentsDto )
        {
           return this.driverService.UserDocument(body);
        }



        //  international user driving permit
        @ApiBody({type:driverDocumentsDto})
        @Post('/international/user_document_driving_permit')
        async internationalUserDocumentDrivingPermit(@Body() body:driverDocumentsDto )
        {
            return this.driverService.UserDocument(body);
        }




        //  local user document passport
        @ApiBody({type:driverDocumentsDto})
        @Post('/local/user_document_passport')
        async localUserDocumentPassport(@Body() body:driverDocumentsDto )
        {
            return this.driverService.UserDocument(body);
        }



        //  local user driving license
        @ApiBody({type:driverDocumentsDto})
        @Post('/local/user_document_driving_license')
        async localUserDocumentDrivingLicense(@Body() body:driverDocumentsDto )
        {
            return this.driverService.UserDocument(body);
        }



         // get  driver By   driver Id
        @SwaggerGetDriver()
        @Get('/:driverId')
        async  findDriverByDriverId(@Param('driverId') driverId:string): Promise<driver>
        {
               console.log("driver id")
              return this.driverService.findDriverByDriverId(driverId);
        }




        // update driver documents
        @SwaggerUpdateDriverDocumentsDocorator()
        @Patch('/:driverId')
        async  updatedriverById(@Param('driverId') driverId:string, @Body() body:updateDriverDocumentsDto )
        {
            return this.driverService.updatedriverById(driverId,body);
        }




        // get  driver By   user Id
        @getDriverHistoryRenterDecorators()
        @ApiQuery({ name: 'userId', required: true })
        @ApiQuery({ name: 'driverId', required: false })
        @Get('userId/:history')
        async  getDriverHistory(@Query('userId') userId?: string, @Query('driverId') driverId?: string)
        {
          console.log("driver id and user id")
          return this.driverService.getDriverHistory(userId,driverId);
        }



        // get  driver By   user Id
        @getAllDriversRenterDecorators()
        @Get('user/:userId')
        async  findDriverByUserId(@Param('userId') userId:string): Promise<driver[]>
        {
               console.log("user id")
              return this.driverService.findDriverByUserId(userId);
        }



        // delete driver history  by user id
        @ApiQuery({ name: 'userId', required: true })
        @Delete('history/:userId')
        async  deleteDriverHistory(@Query('userId') userId: string )
        {
            console.log(" delete history")
            return this.driverService.deleteDriverHistory(userId);
        }


        // delete driver by driver id
        @Delete('/:driverId')
        async  deleteDriverById(@Param('driverId') driverId:string )
        {
          console.log(" delete driver id")
          return this.driverService.deleteDriverById(driverId);
        }




}

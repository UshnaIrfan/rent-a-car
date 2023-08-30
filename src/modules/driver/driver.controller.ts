import { Controller, Get, Post, Body, Patch, Param, UsePipes, ParseUUIDPipe } from "@nestjs/common";
import { DriverService } from './driver.service';
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { createDriverDto } from "./dto/create-driver.dto";
import { driver } from "./schemas/driver.schema";
import { driverDocumentsDto } from "./dto/driver-documents.dto";
import {updateDriverDocumentsDto} from "./dto/update-driver-documents.dto";
import { SwaggerUpdateDriverDocumentsDocorator } from "./swagger-decorator/update-driver-douments-decorators";
import { SwaggerGetDriver } from "./swagger-decorator/get-driver-decorator";

@ApiTags('driver')
@Controller('driver')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}


        // create
        @ApiBody({type:createDriverDto})
        @Post('create')
        async create(@Body() CreateDriverDto:createDriverDto):Promise<driver>
        {
            return this.driverService.createDriver(CreateDriverDto);
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



         // get  driver By  Id
        @SwaggerGetDriver()
        @Get('/:driverId')
        async  findDriverById(@Param('driverId') driverId:string): Promise<driver>
        {
              return this.driverService.findDriverById(driverId);
        }





        // update driver documents
        @SwaggerUpdateDriverDocumentsDocorator()
        @Patch('/:driverId')
        async  updatedriverById(@Param('driverId') driverId:string, @Body() body:updateDriverDocumentsDto )
        {
            return this.driverService.updatedriverById(driverId,body);
        }


}

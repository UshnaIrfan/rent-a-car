import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards, Req } from "@nestjs/common";
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { ApiBearerAuth, ApiBody, ApiQuery, ApiTags } from "@nestjs/swagger";
import { getUserBookingDcorator } from "./swagger-decorator/get-user-booking-dcorator";
import { booking } from "./schemas/booking.schema";
import { getUserBookingHistoryDecorator } from "./swagger-decorator/get-user-booking-history-decorator";
import { UserAuthGuard } from "../../guards/user-auth-guard";
import { UpdateBookingDto } from "./dto/update-booking.dto";
import { userBookingDocumentsDto } from "./dto/user-booking-documents.dto";
import { updateBookingStatusDto } from "./dto/update-booking-status.dto";


@ApiTags('booking')
@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}




      // create
      @ApiBearerAuth()
      @ApiBody({type:CreateBookingDto})
      @UseGuards(UserAuthGuard)
      @Post('create')
      async createBooking(@Body() createBookingDto: CreateBookingDto, @Req() request: any)
      {
          return this.bookingService.createBooking(createBookingDto,request.user.id);
      }



      // get booking history by user id
      @getUserBookingHistoryDecorator()
      @ApiQuery({ name: 'userId', required: true })
      @Get('history')
      async  getBookingHistory(@Query('userId') userId?: string):Promise<booking[]>
      {
          return this.bookingService.getBookingHistory(userId);
      }



      //get booking data by user id
      @getUserBookingDcorator()
      @Get('/:userId')
      async  getBookingDataByUserId(@Param('userId') userId:string ):Promise<CreateBookingDto[] >
      {
        return this.bookingService.getBookingDataByUserId(userId);
      }



        // delete booking by driver id
        @Delete('driver/:driverId')
        async  deleteBookingByDriverId(@Param('driverId') driverId:string )
        {
            console.log(" delete driver id")
            return this.bookingService.deleteBookingByDriverId(driverId);
        }



        // delete booking by car id
        @Delete('car/:carId')
        async  deleteBookingByCarId(@Param('carId') carId:string )
        {
          console.log(" delete car id")
          return this.bookingService.deleteBookingByCarId(carId);
        }




        // update booking
        @Patch('/:bookingId')
        async  updateBooking(@Param('bookingId') bookingId:string, @Body() body:UpdateBookingDto )
        {
          console.log("booking id");
          return this.bookingService.updateBooking(bookingId,body);
        }




        //  international user document passport
        @ApiBearerAuth()
        @ApiBody({type:userBookingDocumentsDto})
        @UseGuards(UserAuthGuard)
        @Post('/international/user_document_passport')
        async internationalUserDocumentPassport(@Body() body:userBookingDocumentsDto,@Req() request: any )
        {
          return this.bookingService.UserDocument(body,request.user.id);
        }



        //  international user document visa
        @ApiBearerAuth()
        @ApiBody({type:userBookingDocumentsDto})
        @UseGuards(UserAuthGuard)
        @Post('/international/user_document_visa')
        async internationalUserDocumentVisa(@Body() body:userBookingDocumentsDto ,@Req() request: any)
        {
          return this.bookingService.UserDocument(body,request.user.id);
        }



        //  international user driving license
        @ApiBearerAuth()
        @ApiBody({type:userBookingDocumentsDto})
        @UseGuards(UserAuthGuard)
        @Post('/international/user_document_driving_license')
        async internationalUserDocumentDrivingLicense(@Body() body:userBookingDocumentsDto,@Req() request: any )
        {
          return this.bookingService.UserDocument(body,request.user.id);
        }


        //  international user driving permit
        @ApiBearerAuth()
        @ApiBody({type:userBookingDocumentsDto})
        @UseGuards(UserAuthGuard)
        @Post('/international/user_document_driving_permit')
        async internationalUserDocumentDrivingPermit(@Body() body:userBookingDocumentsDto,@Req() request: any )
        {
          return this.bookingService.UserDocument(body,request.user.id);
        }




        //  local user document passport
        @ApiBearerAuth()
        @ApiBody({type:userBookingDocumentsDto})
        @UseGuards(UserAuthGuard)
        @Post('/local/user_document_passport')
        async localUserDocumentPassport(@Body() body:userBookingDocumentsDto,@Req() request: any )
        {
          return this.bookingService.UserDocument(body,request.user.id);
        }



        //  local user driving license
        @ApiBearerAuth()
        @ApiBody({type:userBookingDocumentsDto})
        @UseGuards(UserAuthGuard)
        @Post('/local/user_document_driving_license')
        async localUserDocumentDrivingLicense(@Body() body:userBookingDocumentsDto,@Req() request: any )
        {
          return this.bookingService.UserDocument(body,request.user.id);
        }





      // update booking status
      @Patch('/bookingId/:status')
      async  updateBookingStatus(@Param('bookingId') bookingId:string, @Body() body:updateBookingStatusDto )
      {
        console.log("booking status");

        return this.bookingService.updateBookingStatus(bookingId,body);
      }


}

import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards, Req } from "@nestjs/common";
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { ApiBearerAuth, ApiBody, ApiQuery, ApiTags } from "@nestjs/swagger";
import AuthBearer from "../../decorators/auth-bearer.decorators";
import { getUserBookingDcorator } from "./swagger-decorator/get-user-booking-dcorator";
import { booking } from "./schemas/booking.schema";
import { getUserBookingHistoryDecorator } from "./swagger-decorator/get-user-booking-history-decorator";
import { UserAuthGuard } from "../../guards/user-auth-guard";
import { JwtAuthGuard } from "../auth/guards/jwt-auth-guard";


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






}

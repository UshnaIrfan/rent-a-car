import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BaggageOptionService } from './baggage-option.service';
import { CreateBaggageOptionDto } from './dto/create-baggage-option.dto';
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { baggageOption } from "./schemas/baggage-option.schema";
import { UpdateBaggageOptionDto } from "./dto/update-baggage-option.dto";


@ApiTags('baggageOption')

@Controller('baggage-option')
export class BaggageOptionController {
  constructor(private readonly baggageOptionService: BaggageOptionService) {}



        // create
        @ApiBody({type:CreateBaggageOptionDto})
        @Post('create')
        async createBaggage(@Body() createBaggageOptionDto: CreateBaggageOptionDto)
        {
             return this.baggageOptionService.createBaggage(createBaggageOptionDto);
        }


        // get all Baggage
        @Get('all')
        async  getBaggageOption(): Promise<baggageOption[]>
        {
          return this.baggageOptionService.getBaggageOption();
        }


        // update  Baggage
          @Patch('/:baggageId')
          async  updateBaggageOption(@Param('baggageId') baggageId:string, @Body() body:UpdateBaggageOptionDto )
          {
             return this.baggageOptionService.updateBaggageOption(baggageId,body);
          }


          // delete Baggage
          @Delete('/:baggageId')
          async  deleteBaggageOption(@Param('baggageId') baggageId:string )
          {
            return this.baggageOptionService.deleteBaggageOption(baggageId,);
          }

}

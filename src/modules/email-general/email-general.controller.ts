import { Body, Controller, Post,} from "@nestjs/common";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import {emailGeneralService} from "./email-general.service";
import {emailGeneralDto} from "./dto/email-general.dto";

@ApiTags('general')
@Controller('general')
export class emailGeneralController {
  constructor(private readonly emailGeneralService:emailGeneralService) {}


     @ApiBody({type:emailGeneralDto})
     @Post('email/sent')
     async emailSend(
     @Body() emailGeneraldto: emailGeneralDto):Promise<{message: string}>
     {
          return this.emailGeneralService.emailSend(emailGeneraldto );
     }




}

import { Module } from '@nestjs/common';
import { MailchipController } from './mailchip.controller';
import { MailchipService } from "./mailchip.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import {mailChip} from "./schemas/mailchip.schema";
import {MailChipRepository} from "./mailchip.repository";

@Module({

    imports: [TypeOrmModule.forFeature([mailChip])],
    controllers: [MailchipController],
    providers: [MailchipService,MailChipRepository]
})
export class MailchipModule {}

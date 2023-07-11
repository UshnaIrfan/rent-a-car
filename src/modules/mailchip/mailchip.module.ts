import {MailchipController} from "../admin/admin-mailchip.controller";
import { MailchipService } from "./mailchip.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import {mailChip} from "./schemas/mailchip.schema";
import {MailChipRepository} from "./mailchip.repository";
import { Module } from "@nestjs/common";

@Module({

    imports: [TypeOrmModule.forFeature([mailChip])],
    controllers: [MailchipController],
    providers: [MailchipService,MailChipRepository]
})
export class MailchipModule {}

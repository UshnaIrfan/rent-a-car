import { Module } from '@nestjs/common';
import { HubspotService } from './hubspot.service';
import { HubspotController } from './hubspot.controller';
import { TypeOrmModule } from "@nestjs/typeorm";


@Module({
      imports: [TypeOrmModule.forFeature([ ])],
      controllers: [HubspotController],
      providers: [HubspotService,],
      exports:[]
})


export class HubspotModule {}

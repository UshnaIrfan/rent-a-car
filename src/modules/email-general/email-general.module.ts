import { CacheModule, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import * as redisStore from "cache-manager-redis-store";
import {emailGeneralController} from "./email-general.controller";
import {emailGeneralService} from "./email-general.service";

@Module({
  imports: [TypeOrmModule.forFeature([]),
    CacheModule.register({
      store: redisStore,
      uri: process.env.REDIS_URL,
    })],
  controllers: [emailGeneralController],
  providers: [emailGeneralService]
})
export class emailGeneralModule {}

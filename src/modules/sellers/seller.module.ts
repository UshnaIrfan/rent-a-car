import { Module } from '@nestjs/common';
import { SellerService } from './seller.service';
import { SellerController } from './seller.controller';
import {sellerRepository} from "./seller.repository";
import {seller} from "./schemas/seller.schema";
import { TypeOrmModule } from "@nestjs/typeorm";


@Module({
  imports: [

    TypeOrmModule.forFeature([seller]),

  ],

  controllers: [SellerController],
  providers: [SellerService ,sellerRepository]
})
export class SellerModule {}

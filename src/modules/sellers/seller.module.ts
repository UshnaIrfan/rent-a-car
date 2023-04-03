import { Module } from '@nestjs/common';
import { SellerService } from './seller.service';
import { SellerController } from './seller.controller';
import {sellerRepository} from "./seller.repository";
import {seller} from "./schemas/seller.schema";
import { TypeOrmModule } from "@nestjs/typeorm";
import {CategoryRepository} from "../categories/category.repository";
import {category} from "../categories/schemas/category.schema";
import {sellerCategory} from "./schemas/sellerCategory.schema";


@Module({
  imports: [
    TypeOrmModule.forFeature([seller,category ,sellerCategory]),
  ],

   controllers: [SellerController],
   providers: [SellerService ,sellerRepository, CategoryRepository ,sellerCategory]
})
export class SellerModule {}

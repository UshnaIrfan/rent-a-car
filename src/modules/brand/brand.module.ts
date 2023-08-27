import { Module } from '@nestjs/common';
import { BrandService } from './brand.service';
import { BrandController } from './brand.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { brand } from "./schemas/brand.schema";
import { brandRepository } from "./brand.repository";

@Module({
  imports: [TypeOrmModule.forFeature([brand])],
  controllers: [BrandController],
  providers: [BrandService,brandRepository],
})
export class BrandModule {}

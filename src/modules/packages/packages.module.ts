import { Module } from '@nestjs/common';
import { PackagesService } from './packages.service';
import { PackagesController } from './packages.controller';
import { packagesRepository } from "./packages.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { packages } from "./schemas/packages.schema";

@Module({
  imports: [TypeOrmModule.forFeature([packages])],
  controllers: [PackagesController],
  providers: [packagesRepository,PackagesService],
})
export class PackagesModule {}

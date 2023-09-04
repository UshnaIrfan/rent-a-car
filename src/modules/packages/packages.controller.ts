import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PackagesService } from './packages.service';
import { CreatePackageDto } from './dto/create-package.dto';
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { packages } from "./schemas/packages.schema";


@ApiTags('packages')
@Controller('packages')
export class PackagesController {
  constructor(private readonly packagesService: PackagesService) {}

      // Create
      @ApiBody({type:CreatePackageDto})
      @Post('create')
      async createPackages(@Body() createPackageDto: CreatePackageDto):Promise<packages>
      {
        return this.packagesService.createPackages(createPackageDto);
      }




}

import { Injectable } from "@nestjs/common";
import {  Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { validateUuid } from "../../decorators/uuid.decorators";
import { packages } from "./schemas/packages.schema";
import { CreatePackageDto } from "./dto/create-package.dto";


@Injectable()
export class packagesRepository{
  constructor(@InjectRepository(packages) private packagesModel: Repository<packages>
  ) {}


    // create
    async createPackages(createPackageDto: CreatePackageDto):Promise<packages| null>
    {
      return this.packagesModel.save(createPackageDto);
    }





    // find  package by id
    async getPackagesById(id:string):Promise<packages| null>
    {
        validateUuid([id]);
        return  await this.packagesModel.findOne({  where: { id}});
    }





}


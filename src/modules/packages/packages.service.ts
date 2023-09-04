import { Injectable, NotFoundException } from "@nestjs/common";
import { packagesRepository } from "./packages.repository";
import { packages } from "./schemas/packages.schema";
import createPackagesInterface from "./interfaces/create-packages.interface";

@Injectable()
export class PackagesService {
  constructor(private readonly packagesRepository:packagesRepository) {}

      // Create
      async createPackages(createPackagesInterface:createPackagesInterface):Promise<packages>
      {
        return  await this.packagesRepository.createPackages(createPackagesInterface);
      }


     // find  package by id
      async getPackagesById (id:string):Promise<packages>
      {
          const result= await this.packagesRepository.getPackagesById(id);
          return  result;
      }

}

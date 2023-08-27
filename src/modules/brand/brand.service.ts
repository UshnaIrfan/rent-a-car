import { Injectable } from '@nestjs/common';
import createBrandInterface from "./interfaces/create-brand.interface";
import { brandRepository } from "./brand.repository";
import { brand } from "./schemas/brand.schema";
import { UpdateBrandDto } from "./dto/update-brand.dto";

@Injectable()
export class BrandService {
  constructor(private readonly brandRepository:brandRepository) {}



          // create
          async createBrand(CreateBrandInterface:createBrandInterface)
          {
            return  await this.brandRepository.createBrand(CreateBrandInterface);
          }


          // get all  car brands
          async getCarBrands (): Promise<brand[]>
          {
            return  await this.brandRepository.getCarBrands();
          }



          // update   car brands
          async updateCarBrands (brandId:string,body:UpdateBrandDto)
          {
            return  await this.brandRepository.updateCarBrands(brandId,body);
          }


          // delete  car brands
          async deleteCarBrands(brandId:string)
          {
            return  await this.brandRepository.deleteCarBrands(brandId);
          }
}

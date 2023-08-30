import { Injectable, NotFoundException } from "@nestjs/common";
import {  Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { brand } from "./schemas/brand.schema";
import { CreateBrandDto } from "./dto/create-brand.dto";
import * as uuid from "uuid";

import { UpdateBrandDto } from "./dto/update-brand.dto";


@Injectable()
export class brandRepository{
  constructor(@InjectRepository(brand) private brandModel: Repository<brand>
  ) {}


      // create
      async createBrand(createBrandDto: CreateBrandDto): Promise<brand| null>
      {
          return this.brandModel.save(createBrandDto);
      }



      // get all  car brands
      async getCarBrands():Promise<brand[]| null>
      {
        return  this.brandModel.find({ });
      }



       // update   car brands
        async updateCarBrands(brandId: string, body: UpdateBrandDto):Promise<brand| null>
        {
            if (!uuid.validate(brandId))
            {
              throw new NotFoundException('Invalid UUID Format');
            }

            const result = await this.brandModel.findOne({ where: {  id:brandId}});
            if (!result)
            {
              throw new NotFoundException('brand not exist');
            }

            result.brandName = body.brandName;

            const updatedResult = await this.brandModel.save(result);
            return updatedResult;
        }



       // delete  car brands
         async deleteCarBrands(brandId: string):Promise<brand| null>
        {
                if (!uuid.validate(brandId))
                {
                  throw new NotFoundException('Invalid UUID Format');
                }

                const result = await this.brandModel.findOne({ where: {  id:brandId}});
                if (!result)
                {
                  throw new NotFoundException('brand not exist');
                }

                return await this.brandModel.remove(result);
        }




        // get  car brand by id
        async getCarBrandById(brandId: string):Promise<brand| null>
        {
          if (!uuid.validate(brandId))
          {
            throw new NotFoundException('Invalid UUID Format');
          }

          const result = await this.brandModel.findOne({ where: {  id:brandId}});
          return  result
        }
}


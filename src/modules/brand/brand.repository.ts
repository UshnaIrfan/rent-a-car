import { Injectable, NotFoundException } from "@nestjs/common";
import {  Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { brand } from "./schemas/brand.schema";
import { CreateBrandDto } from "./dto/create-brand.dto";
import { UpdateBrandDto } from "./dto/update-brand.dto";
import { validateUuid } from "../../decorators/uuid.decorators";


@Injectable()
export class brandRepository{
  constructor(@InjectRepository(brand) private brandModel: Repository<brand>
  ) {}


      // create
      async createBrand(createBrandDto: CreateBrandDto): Promise<brand| null>
      {
          return this.brandModel.save(createBrandDto);
      }



        // get all   brands of cars
        async getCarBrands():Promise<brand[]| null>
        {
          return  this.brandModel.find({ });
        }



         // update brands of car
         async updateCarBrands(brandId: string, body: UpdateBrandDto):Promise<brand| null>
         {
            validateUuid([brandId]);
            const result = await this.brandModel.findOne({ where: {  id:brandId}});
            if (!result)
            {
              throw new NotFoundException('brand not exist');
            }

            result.brandName = body.brandName;

            const updatedResult = await this.brandModel.save(result);
            return updatedResult;
        }



         // delete  brand of car
         async deleteCarBrands(brandId: string):Promise<brand| null>
         {
                validateUuid([brandId]);
                const result = await this.brandModel.findOne({ where: {  id:brandId}});
                if (!result)
                {
                  throw new NotFoundException('brand not exist');
                }

                return await this.brandModel.remove(result);
         }




        // get   brand by id
        async getCarBrandById(brandId: string):Promise<brand| null>
        {
            validateUuid([brandId]);
            const result = await this.brandModel.findOne({ where: {  id:brandId}});
            return  result
        }



       //find brand by name
        async findBrandByName(brandName: string): Promise<brand| null>
        {
          return  await this.brandModel.findOne({ where: { brandName}});
        }
}


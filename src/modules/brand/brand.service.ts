import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import createBrandInterface from "./interfaces/create-brand.interface";
import { brandRepository } from "./brand.repository";
import { brand } from "./schemas/brand.schema";
import { UpdateBrandDto } from "./dto/update-brand.dto";

@Injectable()
export class BrandService {
  constructor(private readonly brandRepository:brandRepository) {}



          // create
          async createBrand(CreateBrandInterface:createBrandInterface):Promise<brand>
          {

            const existingBrand = await this.brandRepository.findBrandByName(CreateBrandInterface.brandName);
            if (existingBrand)
            {
              throw new ConflictException('This brand already exists');
            }
             return  await this.brandRepository.createBrand(CreateBrandInterface);

          }


           // get all   brands of cars
          async getCarBrands (): Promise<brand[]>
          {
            const  result =await this.brandRepository.getCarBrands();
            if (result.length==0)
            {
              throw new NotFoundException('brand not exist');
            }
            return  result;
          }



       // update brands of car
          async updateCarBrands (brandId:string,body:UpdateBrandDto):Promise<{ brand:brand; message: string }>
          {
            const  brand = await this.brandRepository.updateCarBrands(brandId,body);
            return { message: "updated successfully", brand};
          }



          // delete  brand of car
          async deleteCarBrands(brandId:string):Promise<{ brand:brand,message: string }>
          {
              const brand= await this.brandRepository.deleteCarBrands(brandId);
              return { message: "deleted successfully", brand};
          }



        // get  car brand by id
        async getCarBrandById(brandId:string):Promise<brand| null>
        {
          return  await this.brandRepository.getCarBrandById(brandId);
        }
}

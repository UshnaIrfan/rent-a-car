import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { countryRepository } from "./country.repository";
import createCountryInterface from "./interfaces/create-country.interface";
import { country } from "./schemas/country.schema";
import { UpdateCountryDto } from "./dto/update-country.dto";

@Injectable()
export class CountryService {
  constructor(private readonly countryRepository: countryRepository) {}



      // create
      async createCountry(createCountryInterface:createCountryInterface):Promise<country>
      {
        const result = await this.countryRepository.findCountryByName(createCountryInterface.countryName);
        if (result)
        {
          throw new ConflictException('This country name already exists');
        }
        return  await this.countryRepository.createCountry(createCountryInterface);
      }



        // get all  country
        async getAllCountry(): Promise<country[]>
        {
            const result= await this.countryRepository.getAllCountry();
            if (result.length==0)
            {
              throw new NotFoundException('country not exist');
            }
            return  result
        }



        // get  country  by id
        async getCountryById(countryId:string): Promise<country>
        {
          return  await this.countryRepository.getCountryById(countryId);
        }




        // update country
        async updateCountry (countryId:string,body:UpdateCountryDto):Promise<{ country:country; message: string }>
        {
          const country = await this.countryRepository.updateCountry(countryId,body);
          return { message: "updated successfully", country};
        }



        // delete  country
        async deleteCountry(countryId:string):Promise<{ country:country; message: string }>
        {
          const country= await this.countryRepository.deleteCountry(countryId);
          return { message: "deleted successfully", country};
        }



}

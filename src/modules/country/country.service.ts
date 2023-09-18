import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { countryRepository } from "./country.repository";
import createCountryInterface from "./interfaces/create-country.interface";
import { country } from "./schemas/country.schema";
import { carType } from "../car-type/schemas/car-type.schema";

@Injectable()
export class CountryService {
  constructor(private readonly countryRepository: countryRepository) {}



      // create
      async createCountry(createCountryInterface:createCountryInterface)
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

}

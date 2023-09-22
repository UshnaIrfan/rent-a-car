import { Injectable, NotFoundException } from "@nestjs/common";
import {  Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { country } from "./schemas/country.schema";
import { CreateCountryDto } from "./dto/create-country.dto";
import { validateUuid } from "../../pipes/uuid.validator.pipe";
import { UpdateCountryDto } from "./dto/update-country.dto";


@Injectable()
export class countryRepository{
  constructor(@InjectRepository(country) private countryModel: Repository<country>
  ) {}


        // create
        async createCountry(createCountryDto: CreateCountryDto):Promise<country| null>
        {
          return this.countryModel.save(createCountryDto);
        }


        // get all  country
        async getAllCountry(): Promise<country[]| null>
        {
           return  this.countryModel.find({ });
        }



        //find country by name
        async findCountryByName(countryName: string): Promise<country| null>
        {
          return  await this.countryModel.findOne({ where: { countryName}});
        }



         // get  country  by id
        async getCountryById(countryId:string): Promise<country| null>
        {
            validateUuid([countryId]);
            const result = await this.countryModel.findOne({ where: {  id:countryId}});
            return result
        }




        // update country
        async updateCountry(countryId: string, body: UpdateCountryDto): Promise<country| null>
        {
            validateUuid([countryId]);
            const result = await this.countryModel.findOne({ where: { id:countryId}});
            if (!result)
            {
              throw new NotFoundException('country not found');
            }
            result.countryName = body.countryName;
            const updatedResult = await this.countryModel.save(result);
            return updatedResult;
        }





        // delete  country
        async deleteCountry(countryId:string): Promise<country| null>
        {
            validateUuid([countryId]);
            const result = await this.countryModel.findOne({ where: { id:countryId}});
            if (!result)
            {
              throw new NotFoundException('car model not found');
            }
            return await this.countryModel.remove(result);
        }

}


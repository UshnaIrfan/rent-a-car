import { Injectable, NotFoundException } from "@nestjs/common";
import {  Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { color } from "./schemas/color.schema";
import { CreateColorDto } from "./dto/create-color.dto";
import { UpdateColorDto } from "./dto/update-color.dto";
import { validateUuid } from "../../pipes/uuid.validator.pipe";


@Injectable()
export class ColorRepository{
  constructor(@InjectRepository(color) private colorModel: Repository<color>
  ) {}


        // create
        async createCar(createColorDto: CreateColorDto): Promise<color| null>
        {
          return this.colorModel.save(createColorDto);
        }


        // get all  color
        async getCarColor(): Promise<color[]| null>
        {
          return  this.colorModel.find({ });
        }


       // update  color
        async updateCarColor(colorId: string, body: UpdateColorDto):Promise<color| null>
        {

            validateUuid([colorId]);
            const result = await this.colorModel.findOne({ where: {  id:colorId}});
            if (!result)
            {
              throw new NotFoundException('car color not found');
            }
            result.colorName = body.colorName;
            const updatedResult = await this.colorModel.save(result);
            return updatedResult;

        }



        // delete  color
        async deleteCarColor(colorId:string):Promise<color| null>
        {
            validateUuid([colorId]);
            const result = await this.colorModel.findOne({ where: {  id:colorId}});
            if (!result)
            {
              throw new NotFoundException('car color not found');
            }
            return await this.colorModel.remove(result);
        }



        // get color
          async getCarColorById(colorId:string):Promise<color| null>
          {
              validateUuid([colorId]);
              const result = await this.colorModel.findOne({ where: {  id:colorId}});
              return result
          }



      //find color name by name
      async findColornameByName(colorName: string): Promise<color| null>
      {
        return  await this.colorModel.findOne({ where: { colorName}});
      }
}


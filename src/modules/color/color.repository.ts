import { Injectable, NotFoundException } from "@nestjs/common";
import {  Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { color } from "./schemas/color.schema";
import { CreateColorDto } from "./dto/create-color.dto";
import { updateDriverDocumentsDto } from "../driver/dto/update-driver-documents.dto";
import * as uuid from "uuid";
import path from "path";
import fs from "fs";
import { UpdateBaggageOptionDto } from "../baggage-option/dto/update-baggage-option.dto";
import { UpdateColorDto } from "./dto/update-color.dto";



@Injectable()
export class ColorRepository{
  constructor(@InjectRepository(color) private colorModel: Repository<color>
  ) {}


        // create
        async createCar(createColorDto: CreateColorDto): Promise<color| null>
        {
          return this.colorModel.save(createColorDto);
        }


        // get all users
        async getCarColor(): Promise<color[]| null>
        {
          return  this.colorModel.find({ });
        }


       // update  color
        async updateCarColor(colorId: string, body: UpdateColorDto)
        {
          if (!uuid.validate(colorId))
          {
            throw new NotFoundException('Invalid UUID Format');
          }

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
        async deleteCarColor(colorId:string)
        {

          if (!uuid.validate(colorId))
          {
            throw new NotFoundException('Invalid UUID Format');
          }

          const result = await this.colorModel.findOne({ where: {  id:colorId}});
          if (!result)
          {
            throw new NotFoundException('car color not found');
          }
          return await this.colorModel.remove(result);
        }

}


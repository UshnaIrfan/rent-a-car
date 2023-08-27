import { Injectable } from '@nestjs/common';
import createColorInterface from "./interfaces/create-color.interface";
import { ColorRepository } from "./color.repository";
import { color } from "./schemas/color.schema";
import { updateDriverDocumentsDto } from "../driver/dto/update-driver-documents.dto";
import { UpdateColorDto } from "./dto/update-color.dto";

@Injectable()
export class ColorService {
  constructor(private readonly ColorRepository:ColorRepository) {}



          // create
          async createColor(ColorInterface:createColorInterface)
          {
            return  await this.ColorRepository.createCar(ColorInterface);
          }


          // get all  car year
          async getCarColor (): Promise<color[]>
          {
            return  await this.ColorRepository.getCarColor();
          }



          // update  color
          async updateCarColor (colorId:string,body:UpdateColorDto)
          {
            return  await this.ColorRepository.updateCarColor(colorId,body);
          }


          // delete  color
          async deleteCarColor(colorId:string)
          {
            return  await this.ColorRepository.deleteCarColor(colorId);
          }
}

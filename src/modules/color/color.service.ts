import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import createColorInterface from "./interfaces/create-color.interface";
import { ColorRepository } from "./color.repository";
import { color } from "./schemas/color.schema";
import { UpdateColorDto } from "./dto/update-color.dto";

@Injectable()
export class ColorService {
  constructor(private readonly ColorRepository:ColorRepository) {}



          // create
          async createColor(ColorInterface:createColorInterface)
          {
            const result = await this.ColorRepository.findColornameByName(ColorInterface.colorName);
            if (result)
            {
              throw new ConflictException('This color name already exists');
            }
            return  await this.ColorRepository.createCar(ColorInterface);
          }


          // get all  color
          async getCarColor (): Promise<color[]>
          {
            const result= await this.ColorRepository.getCarColor();
            if (result.length==0)
            {
              throw new NotFoundException('color not exist');
            }
            return  result
          }



          // update  color
          async updateCarColor (colorId:string,body:UpdateColorDto):Promise<{ color:color; message: string }>
          {
            const  color= await this.ColorRepository.updateCarColor(colorId,body);
            return { message: "updated successfully", color};

          }


          // delete  color
          async deleteCarColor(colorId:string):Promise<{ color:color; message: string }>
          {
              const color= await this.ColorRepository.deleteCarColor(colorId);
              return { message: "deleted successfully", color};
          }



          // get color
          async getCarColorById(colorId:string):Promise<color| null>
          {
            return  await this.ColorRepository.getCarColorById(colorId);
          }
}

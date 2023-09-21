import { Injectable, NotFoundException } from "@nestjs/common";
import { UpdateCarImageDto } from './dto/update-car-image.dto';
import createCarImageInterface from "./interfaces/create-car-image.interface";
import { carImageRepository } from "./car-image.repository";
import { CarService } from "../car/car.service";
import { carImage } from "./schemas/car-image.schema";

@Injectable()
export class CarImagesService {
  constructor(private readonly carImageRepository:carImageRepository,
              private readonly carService:CarService) {}


      // create
      async createCarImage(createCarImageInterface:createCarImageInterface,userId:string)
      {
          const carModel= await this.carService.getCarByCarId(createCarImageInterface.carId);
          if(!carModel)
          {
            throw new NotFoundException('invalid car id');
          }
         const carImageData: createCarImageInterface & { userId: string } = {
          ...createCarImageInterface,
          userId: userId,

        };

        return  await this.carImageRepository.createCarImage(carImageData);
      }




      // get all  car image
        async getCarImage ():Promise<carImage[]>
        {
            const result= await this.carImageRepository.getCarImage();
            if (result.length==0)
            {
              throw new NotFoundException('car image not exist');
            }
            return  result
        }



          // update car image
          async updateCarImage (carImageId:string,body:UpdateCarImageDto):Promise<{ carImage:carImage; message: string }>
          {
            const carImage = await this.carImageRepository.updateCarImage(carImageId,body);
            return { message: "updated successfully", carImage};
          }



          // delete car image
          async deleteCarImage(carImageId:string):Promise<{ carImage:carImage; message: string }>
          {
            const carImage= await this.carImageRepository.deleteCarImage(carImageId);
            return { message: "deleted successfully", carImage};
          }




}

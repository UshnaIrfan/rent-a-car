import { Injectable } from '@nestjs/common';
import createCarInterface from "./interfaces/create-car.interface";
import { carRepository } from "./car-repository";

@Injectable()
export class CarService {
  constructor(private readonly CarRepository:carRepository) {}



      // create
      async createCar(CreateCarInterface:createCarInterface)
      {
          return  await this.CarRepository.createCar(CreateCarInterface);
      }





}

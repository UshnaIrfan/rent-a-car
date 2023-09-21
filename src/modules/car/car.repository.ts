import { Injectable, NotFoundException } from "@nestjs/common";
import { Between, In, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { car } from "./schemas/car.schema";
import { validateUuid } from "../../decorators/uuid.decorators";
import { updateCarDto } from "./dto/update-car.dto";
import { pricing } from "../pricing/schemas/pricing.schema";
import { driver } from "../driver/schemas/driver.schema";


@Injectable()
export class carRepository{
  constructor(@InjectRepository(car) private  carModel: Repository<car>,
          //    @InjectRepository(pricing) private  priceModel: Repository<pricing>,
  ) {}


      // create
        async createCar(CreateCarDto: any)
        {
          const car = await this.carModel.create();
          car.userId = CreateCarDto.userId;
          car.brandId = CreateCarDto.brandId;
          car.modelId = CreateCarDto.modelId;
          car.yearId=CreateCarDto.yearId;
          car.colorId=CreateCarDto.colorId;
          car.transmissionId=CreateCarDto.transmissionId;
          car.carTypeId=CreateCarDto.carTypeId;
          car.baggageOptionId=CreateCarDto.baggageOptionId;
          car.seatsCapacityId=CreateCarDto.seatsCapacityId;
          car.mileage=CreateCarDto.mileage;
          car.chassyNo=CreateCarDto.chassyNo;
          car.numberPlate=CreateCarDto.numberPlate;
          car.securityAmount=CreateCarDto.securityAmount;
          car.description=CreateCarDto.description;
          car.latitude=CreateCarDto.latitude;
          car.longitude=CreateCarDto.longitude;
          car.pickUpLocation=CreateCarDto.pickUpLocation;
          car.dropOffLocation=CreateCarDto.dropOffLocation;
          await this.carModel.save(car);
          return car

          //return this.carModel.save(CreateCarDto);
        }


        // Get car by car id
         async getCarByCarId(carId:string):Promise<car| null>
         {
            validateUuid([carId]);
            return   await  this.carModel.findOne({  where: { id:carId},
             relations:['pricing','carImage']
            });
        }





      // delete by car id
       async deleteCarById(carId: string):Promise<car| null>
       {
              validateUuid([carId]);
              const result = await this.carModel.findOne({ where: {  id:carId}});
              if (!result)
              {
                throw new NotFoundException('car not exist');
              }

              return await this.carModel.remove(result);

      }




        // Get car by user id
        async getCarByUserId(userId:string):Promise<car[]| null>
        {
            validateUuid([userId]);
           return  await this.carModel.find({  where: { userId}, relations:['pricing','carImage'] });
        }






      // Get car  history by user id and car id
      async getCarHistory(userId: string, carId: string):Promise<car[]| null>
      {
           validateUuid([userId,carId]);
           let whereConditions: any = {};
            if (userId || carId)
            {
              whereConditions = {
                userId: userId ?? undefined,
                id: carId ?? undefined,
              };
            }
           const results = await this.carModel.find({
           where: Object.keys(whereConditions).length !== 0 ? [whereConditions] : [],
           relations: carId ? ['User', 'carImage', 'booking'] : ['User', 'carImage'], });
           return results;
      }




        //update car by  id
        async updateCarByCarId(id: string, body: updateCarDto):Promise<car| null>
        {
            validateUuid([id]);
            const result = await this.carModel.findOne({ where: { id } });
            if (!result)
            {
              throw new NotFoundException('car not found');
            }

            for (const key in body)
            {
              if (body.hasOwnProperty(key))
              {
                result[key] = body[key];
              }
            }
            const updatedResult = await this.carModel.save(result);
            return updatedResult;
        }






    // search and get  car id for booking purpose
    async Search(carTypes: string, brands: string, transmission: string, color: string, minPrice: string, maxPrice: string, area:string)
    {
          const query = this.carModel.createQueryBuilder('car')
          .select(['car'])
          .leftJoin('car.pricing', 'pricing')
          .leftJoinAndSelect('car.carImage', 'image');
          const whereConditions: Record<string, any> = {};
          const filterParams: { [key: string]: string | undefined } = {
          carTypeId: carTypes ||undefined,
          brandId: brands || undefined,
          transmissionId: transmission || undefined,
          colorId: color || undefined,
          pickUpLocation :area || undefined
          };

          for (const [param, value] of Object.entries(filterParams)) {
            if (value) {
              whereConditions[param] = value;
            }
          }

          if (minPrice && maxPrice) {
            query.andWhere('pricing.price BETWEEN :minPrice AND :maxPrice', {
              minPrice: parseFloat(minPrice),
              maxPrice: parseFloat(maxPrice),
            });
          }

          if (Object.keys(whereConditions).length > 0) {
            query.andWhere(whereConditions);
          }

          const result = await query.getMany();
          return result;
    }







  // Get package  detail by car id
  async getPackageByCarId(carId:string)
  {
    validateUuid([carId]);
    return   await  this.carModel.findOne({  where: { id:carId},
      relations:['pricing']
    });
  }



// // delete car history  by user id
  // async deleteCarHistory(userId: string):Promise<car[]| null>
  // {
  //       validateUuid([userId]);
  //       const result = await this.carModel.find({ where: {  userId:userId}});
  //       if (!result)
  //       {
  //         throw new NotFoundException('data not found');
  //       }
  //       return await this.carModel.remove(result);
  // }


  // async Search(carTypes: string, brands: string, transmission: string, color: string, minPrice: string, maxPrice: string,area:string)
  // {
  //     let matchingCarIds: string[] = [];
  //     if (minPrice && maxPrice)
  //     {
  //         const priceResults = await this.priceModel.find({
  //         where: { price: Between(minPrice, maxPrice), }, });
  //         matchingCarIds = priceResults.map((priceResult) => priceResult.carId);
  //         console.log("price data", matchingCarIds);
  //     }
  //
  //       let whereConditions: any = {};
  //       if (carTypes || brands || transmission || color) {
  //         whereConditions = {
  //           carTypeId: carTypes || undefined,
  //           brandId: brands || undefined,
  //           transmissionId: transmission || undefined,
  //           colorId: color || undefined,
  //           pickUpLocation: area || undefined,
  //         };
  //       }
  //
  //     const hasPriceFilter = matchingCarIds.length > 0 || (minPrice && maxPrice);
  //     const where = {
  //       ...whereConditions,
  //       id: hasPriceFilter ? In(matchingCarIds) : undefined,
  //     };
  //
  //     const results = await this.carModel.find({
  //       where: Object.keys(where).length !== 0 ? where : undefined,
  //       relations: ['carImage'],
  //     });
  //
  //     if (!hasPriceFilter && Object.keys(whereConditions).length === 0) {
  //       return null;
  //     }
  //     return results;
  // }
  //


  //todo
  async driverCars(body:car)
  {
    return this.carModel.save(body);
  }


}








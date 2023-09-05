import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import createDriverOptionInterface from "./interfaces/create-driver-option.interface";
import { driverOptionRepository } from "./driver-option.repository";
import { driverOption } from "./schemas/driver-option.schema";
import { UpdateDriverOptionDto } from "./dto/update-driver-option.dto";

@Injectable()
export class DriverOptionService {

  constructor(private readonly driverOptionRepository:driverOptionRepository) {}



        // create
        async createDriverOption(driverOptionInterface:createDriverOptionInterface)
        {
            const result = await this.driverOptionRepository.findBydriverOption(driverOptionInterface.driverOption);
            if (result)
            {
              throw new ConflictException('This driverOption already exists');
            }
            return  await this.driverOptionRepository.createDriverOption(driverOptionInterface);
        }


         // get all  driver  Option
        async getDriverOption ():Promise<driverOption[]>
        {
          const result= await this.driverOptionRepository.getDriverOption();
          if (result.length==0)
          {
            throw new NotFoundException('driver  Option not exist');
          }
          return  result
        }



       // update  driver  Option
        async updateDriverOptionById (driverOptionId:string,body:UpdateDriverOptionDto):Promise<{ driverOption:driverOption; message: string }>
        {
           const driverOption= await this.driverOptionRepository.updateDriverOptionById(driverOptionId,body);
           return { message: "updated successfully", driverOption};
        }


        // delete  driver  Option
        async deleteDriverOption(driverOptionId:string):Promise<{ driverOption:driverOption; message: string }>
        {
           const driverOption= await this.driverOptionRepository.deleteDriverOption(driverOptionId);
           return { message: " deleted successfully", driverOption};
        }


        // get  driver  Option
        async getCarDriverOptionById(driverOptionId:string): Promise<driverOption>
        {
          return  await this.driverOptionRepository.getCarDriverOptionById(driverOptionId);
        }
}

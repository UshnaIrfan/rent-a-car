import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import createSeatsCapacityInterface from "./interfaces/create-seats-capacity.interface";
import { seatsCapacityRepository } from "./seats-capacity.repository";
import { year } from "../year/schemas/year.schema";
import { seatsCapacity } from "./schemas/seats-capacity.schema";
import { updateDriverDocumentsDto } from "../driver/dto/update-driver-documents.dto";
import { UpdateSeatsCapacityDto } from "./dto/update-seats-capacity.dto";



@Injectable()
export class SeatsCapacityService {
  constructor(private readonly seatsCapacityRepository:seatsCapacityRepository) {}


        // create
        async createSeatsCapacity(createSeatsCapacityInterface:createSeatsCapacityInterface)
        {
            const result = await this.seatsCapacityRepository.findSeatsCapacity(createSeatsCapacityInterface.seatsCapacity);
            if (result)
            {
              throw new ConflictException('This seats capacity already exists');
            }
            return  await this.seatsCapacityRepository.createSeatsCapacity(createSeatsCapacityInterface);
        }



        // get all  seats  Capacity
        async getSeatsCapacity (): Promise<seatsCapacity[]>
        {
            const  result= await this.seatsCapacityRepository.getSeatsCapacity();
            if (result.length==0)
            {
              throw new NotFoundException('seats  Capacity not exist');
            }
            return  result
        }



      // update  seats  Capacity
      async updateSeatsCapacity (seatsCapacityId:string,body:UpdateSeatsCapacityDto):Promise<{ seatsCapacity:seatsCapacity; message: string }>
      {
        const  seatsCapacity=await this.seatsCapacityRepository.updateSeatsCapacity(seatsCapacityId,body);
        return { message: "updated successfully", seatsCapacity};

      }


      // delete  seats  Capacity
      async deleteSeatsCapacity(seatsCapacityId:string):Promise<{ seatsCapacity:seatsCapacity; message: string }>
      {
          const seatsCapacity=await this.seatsCapacityRepository.deleteSeatsCapacity(seatsCapacityId);
          return { message: "deleted successfully", seatsCapacity};
      }



      // get  seats  Capacity
      async getCarSeatsCapacityById(seatsCapacityId:string): Promise<seatsCapacity>
      {
        console.log(seatsCapacityId)
        return  await this.seatsCapacityRepository.getCarSeatsCapacityById(seatsCapacityId);
      }
}

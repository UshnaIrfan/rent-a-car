import {  Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { driver } from "./schemas/driver.schema";
import { createDriverDto } from "./dto/create-driver.dto";
import { updateDriverDocumentsDto } from "./dto/update-driver-documents.dto";
import { UserDocuments } from "../user-documents/schemas/userDocuments.schema";
import { UserVerificationDocuments } from "../user-verifications-documents/schemas/userVerificationDocumets.schema";
import * as path from 'path';
import * as fs from "fs";
import { validateUuid } from "../../decorators/uuid.decorators";



@Injectable()
export class driverRepository{
  constructor(@InjectRepository(driver) private DriverModel: Repository<driver>,
              @InjectRepository(UserDocuments) private userDocumentsModel: Repository<UserDocuments>,
              @InjectRepository(UserVerificationDocuments) private UserVerificationDocumentsModel: Repository<UserVerificationDocuments>

  ) {}


        // create
        async createDriver(CreateDriverDto: createDriverDto): Promise<driver| null>
        {
            return this.DriverModel.save(CreateDriverDto);
        }


        // get  driver By  Id
        async getDriverById(id:string): Promise<driver| null>
        {
             validateUuid(id);
             const driver =await this.DriverModel.findOne({ where: { id}  });
             if (!driver)
             {
                 throw new NotFoundException(' driver not found');
             }
             return  driver
        }




        // get  driver By driver Id with relations
        async findDriverByDriverId(driverId: string): Promise<driver | null>
        {
              validateUuid(driverId);
              const driver = await this.DriverModel.findOne({ where: { id: driverId }, relations: ['UserDocuments'] });
              if (!driver)
              {
                throw new NotFoundException('Driver not found');
              }
              return driver;

        }




        // update driver documents
        async updatedriverById(id: string, body: updateDriverDocumentsDto)
        {
              validateUuid(id);
              const result = await this.userDocumentsModel.findOne({ where: { driverId: id}});
              if (!result)
              {
                  throw new NotFoundException('Driver not found');
              }
              var  oldType=result.type
              var oldTitle= result.titleName
              const Slug = body.slug;
              const slugResult = await this.UserVerificationDocumentsModel.findOne({ where: { slug: Slug } });
              if (!slugResult)
              {
                  throw new NotFoundException('Invalid slug');
              }

              result.slug = body.slug;
              result.type = slugResult.type;
              result.titleName = slugResult.title;
              const oldImagePath = path.join(__dirname, '../../../..', '/asset/', `${result.driverId}-${oldType}-${oldTitle}.png`);
              fs.unlinkSync(oldImagePath);
              const base64Data = body.image;
              const base64image = base64Data.split(';base64,').pop();
              const pdfBuffer = Buffer.from(base64image, 'base64');
              const newImagePath = path.join(__dirname, '../../../..', '/asset/', `${result.driverId}-${result.type}-${result.titleName}.png`);
              fs.writeFileSync(newImagePath, pdfBuffer);
              result.image = body.image;
              const updatedResult = await this.userDocumentsModel.save(result);
              return updatedResult;

        }








      // get  driver By   user Id
      async findDriverByUserId(userId: string): Promise<driver[] | null>
      {
            validateUuid(userId);
            const driver = await this.DriverModel.find({ where: {userId },
              relations: ['UserDocuments']});
            return driver;

      }




  // get  driver By   user Id
  async getDriverHistory(userId:string,driverId:string)
  {
    let whereConditions: any = {};
    if (userId || driverId)
    {
      whereConditions = {
        userId: userId ?? undefined,
        id: driverId ?? undefined,
      };
    }
    const results = await this.DriverModel.find({
      where: Object.keys(whereConditions).length !== 0 ? [whereConditions] : [],
     // relations: ['UserDocuments','booking']});
     relations: driverId ? ['UserDocuments', 'booking'] : ['UserDocuments'], });

    // relations: driverId ? ['pricing', 'carImage', 'booking'] : ['pricing', 'carImage'], });
    return results;

  }
}


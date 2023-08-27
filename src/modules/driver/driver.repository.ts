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
import * as uuid from 'uuid';



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
             if (!uuid.validate(id))
             {
                 throw new NotFoundException('Invalid UUID Format');
             }
             const driver =await this.DriverModel.findOne({ where: { id}  });
             if (!driver)
             {
                 throw new NotFoundException(' driver not found');
             }
             return  driver
        }




        // get  driver By  Id with relations
        async findDriverById(driverId: string): Promise<driver | null>
        {
              if (!uuid.validate(driverId))
              {
                throw new NotFoundException('Invalid UUID Format');
              }
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
              if (!uuid.validate(id))
              {
                throw new NotFoundException('Invalid UUID Format');
              }

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


}


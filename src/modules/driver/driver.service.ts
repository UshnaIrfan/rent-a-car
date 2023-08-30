import { Body, Injectable, NotFoundException, Post } from "@nestjs/common";
import createDriverInterface from "./interfaces/create-driver.interface";
import { driverRepository } from "./driver.repository";
import { driver } from "./schemas/driver.schema";
import * as path from 'path';
import * as fs from "fs";
import { UsersService } from "../users/users.service";
import { userVerificationsDocumentsService } from "../user-verifications-documents/user-verifications-documents.service";
import { UserDocumentsService } from "../user-documents/user-documents.service";
import driverDocumentsInterface from "./interfaces/driver-documents.interface";
import { updateDriverDocumentsDto } from "./dto/update-driver-documents.dto";


@Injectable()
export class DriverService {
  constructor(private readonly DriverRepository:driverRepository,
              private usersService: UsersService,
              private readonly UsersDocumentService: UserDocumentsService,
              private readonly UserVerificationsDocumentsService: userVerificationsDocumentsService,

  ) {}




       // create
        async createDriver(CreateDriverInterface:createDriverInterface):Promise<driver>
        {
            const driver= await this.DriverRepository.createDriver(CreateDriverInterface);
            const base64Data = driver.image;
            const base64image = base64Data.split(';base64,').pop();
            const pdfBuffer = Buffer.from(base64image, 'base64');

              const savePath = path.join(
              __dirname,
              '../../../..',
              '/asset/',
              `${driver.firstName}-${driver.lastName}.png`
            );
            fs.writeFileSync(savePath, pdfBuffer);
            return  driver
        }




       // user document
        async UserDocument(@Body() body:driverDocumentsInterface )
        {
           await this.DriverRepository.getDriverById(body.driverId)
          const slug = await this.UserVerificationsDocumentsService.gettittlebySlug(body.slug)
          if (!slug)
          {
            throw new NotFoundException('Invalid slug');
          }

          const userData: driverDocumentsInterface & { titleName: string,type:string } = {
            ...body,
            titleName:slug.title,
            type:slug.type,
          };


          const user = await this.UsersDocumentService.UserDocument(userData);
          const base64Data = user.image;
          const base64image = base64Data.split(';base64,').pop();
          const pdfBuffer = Buffer.from(base64image, 'base64');
          const savePath = path.join(
            __dirname,
            '../../../..',
            '/asset/',
            `${user.driverId}-${user.type}-${user.titleName}.png`
          );
          fs.writeFileSync(savePath, pdfBuffer);
          return user;
        }




        // get  driver By  Id
        async findDriverById (driverId:string): Promise<driver>
        {
             return  await this.DriverRepository.findDriverById(driverId);
        }



        // update driver documents
        async updatedriverById (driverId:string,body:updateDriverDocumentsDto)
        {
           await this.DriverRepository.findDriverById(driverId);
           return  await this.DriverRepository.updatedriverById(driverId,body);
        }

}

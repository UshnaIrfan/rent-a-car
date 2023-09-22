import { Body, Injectable, NotFoundException } from "@nestjs/common";
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
import { JwtService } from "@nestjs/jwt";
import { updateDriverDto } from "./dto/update-driver.dto";
import { CountryService } from "../country/country.service";


@Injectable()
export class DriverService {
  constructor(private readonly DriverRepository:driverRepository,
              private jwtService: JwtService,
              private usersService: UsersService,
              private readonly countryService: CountryService,
              private readonly UsersDocumentService: UserDocumentsService,
              private readonly UserVerificationsDocumentsService: userVerificationsDocumentsService,
  ) {}




       // create
        async createDriver(CreateDriverInterface:createDriverInterface,userId:string):Promise<driver>
        {


            const country= await this.countryService.getCountryById(CreateDriverInterface.countryId);
            if(!country)
            {
              throw new NotFoundException('country not found');
            }
            const driverData: createDriverInterface & { userId: string } = {
              ...CreateDriverInterface,
              userId: userId,
            };
            const driver= await this.DriverRepository.createDriver(driverData);
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




      // get  driver By  driver Id
        async findDriverByDriverId (driverId:string): Promise<driver>
        {
             return  await this.DriverRepository.findDriverByDriverId(driverId);
        }



        // update driver documents
        async updatedriverById (driverId:string,body:updateDriverDocumentsDto)
        {
           await this.DriverRepository.findDriverByDriverId(driverId);
           return  await this.DriverRepository.updatedriverById(driverId,body);
        }



        // get  driver By   user Id
        async findDriverByUserId (userId:string): Promise<driver[]>
        {
           const user= await this.DriverRepository.findDriverByUserId(userId);
           if (user.length==0)
           {
               throw new NotFoundException('data not found');
           }
              return  user
        }



        // get  driver By   user Id
        async getDriverHistory (userId:string,driverId:string)
        {
          const user= await this.DriverRepository.getDriverHistory(userId,driverId);
          if (user.length==0)
          {
            throw new NotFoundException('user not found');
          }
          return  user
        }



        // delete driver by driver id
        async deleteDriverById (driverId):Promise<{ driver:driver; message: string }>
        {
             const  driver= await this.DriverRepository.deleteDriverById(driverId);
             return { message: "deleted successfully",driver:driver};
        }





        //update driver by  driver id
        async updateDriverByDriverId (driverId:string,body:updateDriverDto)
        {
           return  await this.DriverRepository.updateDriverByDriverId(driverId,body);
        }







}

import { Module } from '@nestjs/common';
import { DriverService } from './driver.service';
import { DriverController } from './driver.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { driver } from "./schemas/driver.schema";
import { driverRepository } from "./driver.repository";
import { UsersService } from "../users/users.service";
import { UsersRepository } from "../users/users.respository";
import { User } from "../users/schemas/user.schema";
import { UserDocumentsService } from "../user-documents/user-documents.service";
import { userVerificationsDocumentsService } from "../user-verifications-documents/user-verifications-documents.service";
import { userVerifcationDocumentsRepository } from "../user-verifications-documents/user-verification-documents.repository";
import { UserVerificationDocuments } from "../user-verifications-documents/schemas/userVerificationDocumets.schema";
import { UserDocuments } from "../user-documents/schemas/userDocuments.schema";
import { UsersDocumentRepository } from "../user-documents/user-document.repository";

@Module({
  imports: [TypeOrmModule.forFeature([UserDocuments,driver,User,UserVerificationDocuments])],
  controllers: [DriverController],
  providers: [UsersRepository,UsersDocumentRepository,UsersService,DriverService,userVerifcationDocumentsRepository,driverRepository,userVerificationsDocumentsService,UserDocumentsService]
})
export class DriverModule {}

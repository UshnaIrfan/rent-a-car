import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../users/schemas/user.schema";
import { UserDocuments } from "../user-documents/schemas/userDocuments.schema";
import { UserVerificationDocuments } from "./schemas/userVerificationDocumets.schema";
import { UsersService } from "../users/users.service";
import { userVerifcationDocumentsRepository } from "./user-verification-documents.repository";
import { UsersRepository } from "../users/users.respository";
import { UsersDocumentRepository } from "../user-documents/user-document.repository";
import { userVerificationsDocumentsService } from "./user-verifications-documents.service";

@Module({
  imports: [TypeOrmModule.forFeature([User,UserDocuments ,UserVerificationDocuments])],
  controllers: [],
  providers: [userVerificationsDocumentsService, UsersService ,userVerifcationDocumentsRepository,UsersRepository,UsersDocumentRepository],


})
export class UserVerificationsDocumentsModule {}

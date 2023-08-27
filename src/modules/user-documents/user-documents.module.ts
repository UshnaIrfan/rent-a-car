import { Module } from '@nestjs/common';
import { UserDocumentsService } from './user-documents.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../users/schemas/user.schema";
import { UserDocuments } from "./schemas/userDocuments.schema";
import { UserVerificationDocuments } from "../user-verifications-documents/schemas/userVerificationDocumets.schema";
import { UsersService } from "../users/users.service";
import { userVerifcationDocumentsRepository } from "../user-verifications-documents/user-verification-documents.repository";
import { UsersRepository } from "../users/users.respository";
import { UsersDocumentRepository } from "./user-document.repository";

@Module({
  imports: [TypeOrmModule.forFeature([User,UserDocuments ,UserVerificationDocuments])],
  controllers: [],
  providers: [UserDocumentsService, UsersService ,userVerifcationDocumentsRepository,UsersRepository,UsersDocumentRepository],


})
export class UserDocumentsModule {}

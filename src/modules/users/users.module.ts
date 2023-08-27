import {User} from "./schemas/user.schema";
import { UsersService } from "./users.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { UsersRepository } from "./users.respository";
import { UserDocuments } from "../user-documents/schemas/userDocuments.schema";
import { UserVerificationDocuments } from "../user-verifications-documents/schemas/userVerificationDocumets.schema";
import { userVerifcationDocumentsRepository } from "../user-verifications-documents/user-verification-documents.repository";
import { UsersDocumentRepository } from "../user-documents/user-document.repository";


@Module({
     imports: [TypeOrmModule.forFeature([User,UserDocuments ,UserVerificationDocuments])],
     controllers: [],
     providers: [ UsersService ,userVerifcationDocumentsRepository,UsersRepository,UsersDocumentRepository],
     exports: [UsersRepository,userVerifcationDocumentsRepository, UsersService,UsersDocumentRepository],
})
export class UsersModule {}

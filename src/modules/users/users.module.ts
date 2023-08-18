import {User} from "./schemas/user.schema";
import { UsersService } from "./users.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { UsersRepository } from "./repositories/users.respository";
import {UserDocuments } from "./schemas/user-document.schema";
import {UsersDocumentRepository} from "./repositories/user-document.respository";
import {userVerifcationDocumentsRepository} from "./repositories/user-verifcation-documents.repository";
import {UserVerificationDocuments} from "./schemas/user-verification-document.schema";


@Module({
     imports: [TypeOrmModule.forFeature([User,UserDocuments ,UserVerificationDocuments])],
     controllers: [],
     providers: [ UsersService ,userVerifcationDocumentsRepository,UsersRepository,UsersDocumentRepository],
     exports: [UsersRepository,userVerifcationDocumentsRepository, UsersService,UsersDocumentRepository],
})
export class UsersModule {}

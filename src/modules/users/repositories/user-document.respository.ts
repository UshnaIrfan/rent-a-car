import { Injectable } from "@nestjs/common";
import {  Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { UserDocuments } from "../schemas/user-document.schema";
import { createUserDocumentsDto } from "../dto/create-user-documents.dto";

@Injectable()
export class UsersDocumentRepository {
  constructor(@InjectRepository(UserDocuments) private userDocumentModel: Repository<UserDocuments>) {}



            // user document
            async UserDocument(body: createUserDocumentsDto):Promise<UserDocuments| null>
            {
               return this.userDocumentModel.save(body);
            }


             //   get user documents  by   title name
            async getByImage(id:string,image: string):Promise<UserDocuments| null>
            {
                 return this.userDocumentModel.findOne({ where: { image}});
            }




}

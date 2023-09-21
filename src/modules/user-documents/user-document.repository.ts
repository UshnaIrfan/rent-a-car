import { Injectable, NotFoundException } from "@nestjs/common";
import {  Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { createUserDocumentsDto } from "./dto/create-user-document.dto";
import { UserDocuments } from "./schemas/userDocuments.schema";
import { validateUuid } from "../../decorators/uuid.decorators";

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




            // get user documents  by  id
            async findDocumentbyId(id:string):Promise<UserDocuments| null>
            {
                return this.userDocumentModel.findOne({ where: { id}});
            }



           // user  document update
            async updateDocument(documentId:string,documentStatus:string):Promise<UserDocuments| null>
            {
                validateUuid([documentId]);
                const result = await  this.userDocumentModel.findOne({ where: { id:documentId}});
                if (!result)
                {
                  throw new NotFoundException('data not exit');
                }
                result.documentstatus = documentStatus;
                return this.userDocumentModel.save(result);
            }





}

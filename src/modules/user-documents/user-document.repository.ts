import { Injectable } from "@nestjs/common";
import {  Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { createUserDocumentsDto } from "./dto/create-user-document.dto";
import { UserDocuments } from "./schemas/userDocuments.schema";

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
            async updateDocument(id:string,documentStatus:string):Promise<UserDocuments| null>
            {
                const user = await  this.userDocumentModel.findOne({ where: { userId:id}});
                if (!user)
                {
                  return null
                }
                user.documentstatus = documentStatus;
                return this.userDocumentModel.save(user);
            }





}

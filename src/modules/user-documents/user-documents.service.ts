import { Injectable } from '@nestjs/common';
import { createUserDocumentsDto } from "./dto/create-user-document.dto";
import { UserDocuments } from "./schemas/userDocuments.schema";
import { UsersDocumentRepository } from "./user-document.repository";

@Injectable()
export class UserDocumentsService {
  constructor(
    private readonly usersDocumentRepository: UsersDocumentRepository,) {}



          // user document
          async UserDocument(req: any):Promise<UserDocuments>
          {
              return this.usersDocumentRepository.UserDocument(req);
          }


          // get user documents  by   title name
          async getByImage (id:string,image:string):Promise<UserDocuments>
          {
            return this.usersDocumentRepository.getByImage(id,image);
          }



          // get user documents  by  id
          async findDocumentbyId (id:string):Promise<UserDocuments>
          {
            return this.usersDocumentRepository.findDocumentbyId(id);
          }


          // user  document update
          async updateDocument (id:string,documentStatus:string):Promise<UserDocuments>
          {
               return await this.usersDocumentRepository.updateDocument(id,documentStatus);
          }


}

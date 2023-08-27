import { Injectable } from '@nestjs/common';
import { userVerifcationDocumentsRepository } from "../user-verifications-documents/user-verification-documents.repository";
import { UserVerificationDocuments } from "./schemas/userVerificationDocumets.schema";

@Injectable()
export class userVerificationsDocumentsService {
  constructor(
    private readonly UserVerifcationDocumentsRepository: userVerifcationDocumentsRepository,
  ) {}




        // find user documents  by   title name
        async gettittlebyname (titleName:string):Promise<UserVerificationDocuments>
        {
          return this.UserVerifcationDocumentsRepository.gettittlebyname(titleName);
        }


        // find user documents  by   title type
        async gettittlebytype (type:string):Promise<UserVerificationDocuments>
        {
          return this.UserVerifcationDocumentsRepository.gettittlebytype(type);
        }



        // find user documents  by slug
        async gettittlebySlug (type:string):Promise<UserVerificationDocuments>
        {
          return this.UserVerifcationDocumentsRepository.gettittlebySlug(type);
        }
}

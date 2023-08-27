import { Injectable } from "@nestjs/common";
import {  Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { UserVerificationDocuments } from "./schemas/userVerificationDocumets.schema";

@Injectable()
export class userVerifcationDocumentsRepository {
  constructor(@InjectRepository(UserVerificationDocuments) private userVerificationDocumentModel: Repository<UserVerificationDocuments>) {}



        // find user documents  by   title name
        async gettittlebyname(titleName:string):Promise<UserVerificationDocuments | null>
        {
          return this.userVerificationDocumentModel.findOne({ where: { title:titleName}});
        }


        // find user documents  by   title type
        async gettittlebytype(type:string):Promise<UserVerificationDocuments | null>
        {
          return this.userVerificationDocumentModel.findOne({ where: { type}});
        }


        // find user documents  by   title slug
        async gettittlebySlug(slug:string):Promise<UserVerificationDocuments | null>
        {
          return this.userVerificationDocumentModel.findOne({ where: { slug}});
        }



}

import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./schemas/user.schema";
import { UsersRepository } from "./repositories/users.respository";
import {UsersDocumentRepository} from "./repositories/user-document.respository";
import { createUserDocumentsDto } from "./dto/create-user-documents.dto";
import { userVerifcationDocumentsRepository } from "./repositories/user-verifcation-documents.repository";
import { UserDocuments } from "./schemas/user-document.schema";
import { UserVerificationDocuments } from "./schemas/user-verification-document.schema";


@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly usersDocumentRepository: UsersDocumentRepository,
    private readonly UserVerifcationDocumentsRepository: userVerifcationDocumentsRepository,

  ) {}



             //FRONTEND APIS
            // find user by email
             async findUserByEmail(email: string): Promise<User | null>
             {
                 return this.usersRepository.findUserByEmail(email);
             }


              // create user
             async createUser(user: CreateUserDto): Promise<User | null>
             {
                 return this.usersRepository.createUser(user);
             }


            // get user by id   ( with relation)
            async findUserById (id:string): Promise<User | null>
            {
                return this.usersRepository.findUserById(id);
            }



            // get user by id
            async getUserById (id:string):Promise<User| null>
            {
              return this.usersRepository.getUserById(id);
            }






            // get all users
            async getAllUser(): Promise<User[] | null>
            {
              const users =await this.usersRepository.getAllUser();
              if(!users)
              {
                throw new NotFoundException('No user exit');
              }
              return  users;
            }



           // user update ( otp active status)
            async isOtpActive(email: string,otp_status:string): Promise<User | null>
            {
                 return this.usersRepository.isOtpActive(email,otp_status);
            }


            //  update password
            async updatePassword(email: string ,password:string): Promise<User | null>
            {
                return this.usersRepository.updatePassword(email,password);
            }


             // find user by  first name
            async findUserByFirstName(firstname: string): Promise<User | null>
            {
              return this.usersRepository.findUserByFirstName(firstname);
            }



           // user document
            async UserDocument(user: createUserDocumentsDto):Promise<UserDocuments>
            {
                return this.usersDocumentRepository.UserDocument(user);
            }


          // get user documents  by   title name
            async getByImage (id:string,image:string):Promise<UserDocuments>
            {
              return this.usersDocumentRepository.getByImage(id,image);
            }






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

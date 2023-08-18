import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn, ManyToOne, JoinTable, JoinColumn, OneToOne
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "./user.schema";
import { UserVerificationDocuments } from "./user-verification-document.schema";

export enum  documentStatus {
  ACTIVE= 'true',
  INACTIVE = 'false',
}

export enum  usertype {
  LOCAL= 'Local',
  INTERNATIONAL = 'International',
}


@Entity({ name: 'users_documents'})
export class UserDocuments {

      @ApiProperty()
      @PrimaryGeneratedColumn('uuid')
      id: string;


      @ApiProperty({nullable:true  })
      @Column({ enum: usertype })
      type: string;



      @ApiProperty()
      @Column({nullable:true  })
      titleName: string;



      @ApiProperty()
      @Column({nullable:true ,type: 'text' })
      image: string;



      @ApiProperty()
      @Column({  enum: documentStatus , default: documentStatus.INACTIVE  })
      documentstatus: string;



      @ApiProperty()
      @Column({  nullable: true })
      userId: string;



      @ApiProperty()
      @Column({  nullable: true })
      slug: string;



      @ApiProperty()
      @CreateDateColumn()
      createdAt: Date



      @ApiProperty()
      @UpdateDateColumn()
      updatedAt: Date




      @ApiProperty({ type: () => [User] })
      @ManyToOne(() => User, User => User.UserDocuments)
      @JoinColumn({ name: 'userId' })
      User: User[];



      @OneToOne(() => UserVerificationDocuments, UserVerificationDocuments => UserVerificationDocuments.UserDocuments)
      @JoinColumn({ name: 'slug' ,referencedColumnName: 'slug'})
      UserVerificationDocuments: UserVerificationDocuments[];


}

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn, ManyToOne, JoinColumn, OneToOne
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "../../users/schemas/user.schema"
import { UserVerificationDocuments } from "../../user-verifications-documents/schemas/userVerificationDocumets.schema";
import { driver } from "../../driver/schemas/driver.schema";



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
      @Column({  nullable: true })
      driverId: string;


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



      // @OneToOne(() => UserVerificationDocuments, UserVerificationDocuments => UserVerificationDocuments.UserDocuments)
      // @JoinColumn({ name: 'slug' ,referencedColumnName: 'slug'})
      // UserVerificationDocuments: UserVerificationDocuments[];






      @ApiProperty({ type: () => [driver] })
      @ManyToOne(() => driver, driver => driver.UserDocuments)
      @JoinColumn({ name: 'driverId' })
      driver: driver[];


}

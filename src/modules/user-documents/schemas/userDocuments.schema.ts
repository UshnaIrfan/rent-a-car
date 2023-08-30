import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn, ManyToOne, JoinColumn
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "../../users/schemas/user.schema"
import { driver } from "../../driver/schemas/driver.schema";



export enum  documentStatus {
      PENDING = 'pending',
      APPROVED = 'approved',
      REJECTED = 'rejected'

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
      @Column({  enum: documentStatus , default: documentStatus.PENDING  })
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



      //relation  btw userDocuments and user
      @ApiProperty({ type: () => [User] })
      @ManyToOne(() => User, User => User.UserDocuments)
      @JoinColumn({ name: 'userId' })
      User: User[];



      //relation  btw userDocuments and driver
      @ApiProperty({ type: () => [driver] })
      @ManyToOne(() => driver, driver => driver.UserDocuments)
      @JoinColumn({ name: 'driverId' })
      driver: driver[];


}

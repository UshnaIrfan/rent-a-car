import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Role } from "../../../enums/role.enum";
import {UserDocuments} from "../../user-documents/schemas/userDocuments.schema";


export enum otpStatus {
     ACTIVE= 'true',
     INACTIVE = 'false',
}


export enum blockStatus {
     BLOCK= 'block',
     UNBLOCK = 'unblock',
}


@Entity({ name: 'users' })
export class User {

     @ApiProperty()
     @PrimaryGeneratedColumn('uuid')
     id: string;


     @ApiProperty()
     @Column({nullable:true})
     firstName: string;


     @ApiProperty()
     @Column({nullable:true  })
     lastName: string;


     @ApiProperty()
     @Column({nullable:true  })
     country: string;


     @ApiProperty()
     @Column({nullable:true, type: 'date'})
     dateOfBirth: Date;



     @ApiProperty()
     @Column({nullable:true})
     phoneNo: string;



     @ApiProperty()
     @Column({nullable:true,type: 'text'})
     image: string;


     @ApiProperty()
     @Column({nullable:true,unique:true})
     email: string;


     @ApiProperty()
     @Column({nullable:true})
     password: string;



     @ApiProperty()
     @Column({ default: Role.USER})
     roles: string;


     @ApiProperty()
     @Column({  enum: otpStatus , default: otpStatus.INACTIVE  })
     otpStatus: string;



     @ApiProperty()
     @Column({  enum: blockStatus, default: blockStatus.UNBLOCK })
     blockStatus: string;



     @ApiProperty()
     @CreateDateColumn()
     createdAt: Date


     @ApiProperty()
     @UpdateDateColumn()
     updatedAt: Date


     @ApiProperty({ type: () => [UserDocuments] })
     @OneToMany(() => UserDocuments, UserDocuments => UserDocuments.User)
     UserDocuments: UserDocuments[];

}

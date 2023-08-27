import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import {UserDocuments} from "../../user-documents/schemas/userDocuments.schema";


@Entity({ name: 'drivers' })
export class driver {

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
        @Column({nullable:true, type: 'date'})
        dateOfBirth: Date;


        @ApiProperty()
        @Column({nullable:true  })
        country: string;



        @ApiProperty()
        @Column({nullable:true})
        phoneNo: string;



        @ApiProperty()
        @Column({nullable:true,type: 'text'})
        image: string;


        @ApiProperty()
        @Column({nullable:true})
        hourlyRate: string;


        @ApiProperty()
        @CreateDateColumn()
        createdAt: Date


        @ApiProperty()
        @UpdateDateColumn()
        updatedAt: Date



        @ApiProperty({ type: () => [UserDocuments] })
        @OneToMany(() => UserDocuments, UserDocuments => UserDocuments.driver)
        UserDocuments: UserDocuments[];


}

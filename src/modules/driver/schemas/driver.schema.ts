import {
        Entity,
        Column,
        PrimaryGeneratedColumn,
        CreateDateColumn,
        UpdateDateColumn,
        OneToMany,
        ManyToOne, JoinColumn
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import {UserDocuments} from "../../user-documents/schemas/userDocuments.schema";
import {User} from "../../users/schemas/user.schema"
import { booking } from "../../booking/schemas/booking.schema";

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
        @Column({nullable:true})
        userId: string;


        @ApiProperty()
        @CreateDateColumn()
        createdAt: Date


        @ApiProperty()
        @UpdateDateColumn()
        updatedAt: Date


        //relation  btw userDocuments and driver
        @ApiProperty({ type: () => [UserDocuments] })
        @OneToMany(() => UserDocuments, UserDocuments => UserDocuments.driver)
        UserDocuments: UserDocuments[];




        //relation  btw driver and user
        @ApiProperty({ type: () => [User] })
        @ManyToOne(() => User, User => User.driver)
        @JoinColumn({ name: 'userId' })
        User: User[];




        //relation  btw booking and driver
        @ApiProperty({ type: () => [booking] })
        @OneToMany(() => booking, booking => booking.driver)
        booking: booking[];





}

import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn, OneToMany, ManyToOne, JoinColumn, ManyToMany
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { pricing } from "../../pricing/schemas/pricing.schema";
import { User } from "../../users/schemas/user.schema";
import { carImage } from "../../car-images/schemas/car-image.schema";
import { booking } from "../../booking/schemas/booking.schema";
import { driver } from "../../driver/schemas/driver.schema";


export enum carBookedStatus {
    BOOKED= 'true',
    UNBOOKED = 'false',
}


@Entity({ name: 'cars' })
export class car {

    @ApiProperty()
    @PrimaryGeneratedColumn('uuid')
    id: string;


    @ApiProperty()
    @Column({nullable:true})
    userId: string;



    @ApiProperty()
    @Column({nullable:true})
    brandId: string;


    @ApiProperty()
    @Column({nullable:true  })
    modelId: string;



    @ApiProperty()
    @Column({nullable:true  })
    yearId: string;


    @ApiProperty()
    @Column({nullable:true  })
    colorId: string;


    @ApiProperty()
    @Column({nullable:true  })
    transmissionId: string;



    @ApiProperty()
    @Column({nullable:true  })
    carTypeId: string;


    @ApiProperty()
    @Column({nullable:true})
    baggageOptionId: string;


    @ApiProperty()
    @Column({nullable:true})
    seatsCapacityId: string;



    @ApiProperty()
    @Column({nullable:true})
    mileage: string;



    @ApiProperty()
    @Column({nullable:true})
    chassyNo: string;



    @ApiProperty()
    @Column({nullable:true})
    numberPlate: string;


    @ApiProperty()
    @Column({nullable:true})
    securityAmount: string;




    @ApiProperty()
    @Column({nullable:true})
    description: string;



    @ApiProperty()
    @Column({ nullable: true })
    latitude: number;


    @ApiProperty()
    @Column({ nullable: true })
    longitude: number;


    @ApiProperty()
    @Column({ nullable: true })
    pickUpLocation: string;



    @ApiProperty()
    @Column({ nullable: true })
    dropOffLocation: string;


    @ApiProperty()
    @Column({  enum: carBookedStatus , default: carBookedStatus.UNBOOKED  })
    carBookedStatus: string;


    @ApiProperty()
    @CreateDateColumn()
    createdAt: Date


    @ApiProperty()
    @UpdateDateColumn()
    updatedAt: Date


    //relation  btw pricing and car
    @ApiProperty({ type: () => [pricing] })
    @OneToMany(() => pricing, pricing => pricing.car, { cascade: true })
    pricing: pricing[];



    //relation  btw car and user
    @ApiProperty({ type: () => [User] })
    @ManyToOne(() => User, User => User.car)
    @JoinColumn({ name: 'userId' })
    User: User[];


   //relation  btw carImage and car
    @ApiProperty({ type: () => [carImage] })
    @OneToMany(() => carImage, carImage => carImage.car, { cascade: true })
    carImage: carImage[];



    //relation  btw car and booking
    @ApiProperty({ type: () => [booking] })
    @OneToMany(() => booking, booking => booking.car, { cascade: true })
    booking: booking[];


    //relation  btw car and driver
    @ApiProperty({ type: () => [driver] })
    @ManyToMany(() => driver, driver => driver.car)
    driverIds: any[];


}

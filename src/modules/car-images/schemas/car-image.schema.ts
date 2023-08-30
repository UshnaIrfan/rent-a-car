import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne, JoinColumn
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

import {car} from '../../car/schemas/car.schema'
@Entity({ name: 'car_image' })
export class  carImage {

    @ApiProperty()
    @PrimaryGeneratedColumn('uuid')
    id: string;



    @ApiProperty()
    @Column({nullable:true})
    carId: string;



    @ApiProperty()
    @Column({nullable:true})
    image: string;


    @ApiProperty()
    @CreateDateColumn()
    createdAt: Date


    @ApiProperty()
    @UpdateDateColumn()
    updatedAt: Date


    //relation  btw carImage and car
    @ApiProperty({ type: () => [car] })
    @ManyToOne(() => car, car => car.carImage)
    @JoinColumn({ name: 'carId' })
    car: car[];

}

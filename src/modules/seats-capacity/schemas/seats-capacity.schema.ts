import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity({ name: 'seats_capacity' })
export class  seatsCapacity {

    @ApiProperty()
    @PrimaryGeneratedColumn('uuid')
    id: string;


    @ApiProperty()
    @Column({nullable:true})
    seatsCapacity: Number;


    @ApiProperty()
    @CreateDateColumn()
    createdAt: Date

    @ApiProperty()
    @UpdateDateColumn()
    updatedAt: Date

}

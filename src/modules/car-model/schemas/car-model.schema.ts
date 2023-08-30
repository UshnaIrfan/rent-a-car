import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity({ name: 'car_models' })
export class  carModel{

    @ApiProperty()
    @PrimaryGeneratedColumn('uuid')
    id: string;


    @ApiProperty()
    @Column({nullable:true})
    model: string;


    @ApiProperty()
    @CreateDateColumn()
    createdAt: Date


    @ApiProperty()
    @UpdateDateColumn()
    updatedAt: Date

}

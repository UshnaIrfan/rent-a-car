import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity({ name: 'baggage_option' })
export class  baggageOption {

    @ApiProperty()
    @PrimaryGeneratedColumn('uuid')
    id: string;


    @ApiProperty()
    @Column({nullable:true,unique:true})
    baggageOption: Number;


    @ApiProperty()
    @CreateDateColumn()
    createdAt: Date


    @ApiProperty()
    @UpdateDateColumn()
    updatedAt: Date

}

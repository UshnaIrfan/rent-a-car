import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";


export enum transmissiontype {
  MANUAL= 'manual',
  AUTOMATIC = 'automatic',
}


@Entity({ name: 'transmission' })
export class  transmission {

    @ApiProperty()
    @PrimaryGeneratedColumn('uuid')
    id: string;


    @ApiProperty()
    @Column({ enum: transmissiontype, default: transmissiontype.MANUAL,unique:true})
    transmission: string;


    @ApiProperty()
    @CreateDateColumn()
    createdAt: Date


    @ApiProperty()
    @UpdateDateColumn()
    updatedAt: Date

}

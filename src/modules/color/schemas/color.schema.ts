import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity({ name: 'color' })
export class  color {

    @ApiProperty()
    @PrimaryGeneratedColumn('uuid')
    id: string;


    @ApiProperty()
    @Column({nullable:true})
    colorName: string;


    @ApiProperty()
    @CreateDateColumn()
    createdAt: Date



    @ApiProperty()
    @UpdateDateColumn()
    updatedAt: Date

}

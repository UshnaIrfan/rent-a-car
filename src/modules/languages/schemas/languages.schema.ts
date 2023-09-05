import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity({ name: 'languages' })
export class  languages {

    @ApiProperty()
    @PrimaryGeneratedColumn('uuid')
    id: string;


    @ApiProperty()
    @Column({nullable:true,unique:true})
    languages: string;


    @ApiProperty()
    @CreateDateColumn()
    createdAt: Date



    @ApiProperty()
    @UpdateDateColumn()
    updatedAt: Date

}

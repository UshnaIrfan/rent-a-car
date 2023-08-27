import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity({ name: 'brands' })
export class  brand {

        @ApiProperty()
        @PrimaryGeneratedColumn('uuid')
        id: string;


        @ApiProperty()
        @Column({nullable:true})
        brandName: string;


        @ApiProperty()
        @CreateDateColumn()
        createdAt: Date



        @ApiProperty()
        @UpdateDateColumn()
        updatedAt: Date

}

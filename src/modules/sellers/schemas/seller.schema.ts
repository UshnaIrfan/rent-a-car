import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';
import {category} from "../../categories/schemas/category.schema";


@Entity({ name: 'sellers' })

export class seller{

    @ApiProperty()
    @PrimaryGeneratedColumn('uuid')
    id: string;


    @ApiProperty()
    @Column({unique:true})
    seller_ID: string;


    @ApiProperty()
    @Column({unique:true})
    seller_name: string;



    // @ApiProperty({type: () => category})
    // @ManyToOne(() => category, { eager: true })
    // @JoinColumn({ name: ' category_ID' })
    // category: category;


}

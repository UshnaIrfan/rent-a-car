import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
    OneToMany,
    ManyToMany,
    JoinTable
} from "typeorm";
import { ApiProperty } from '@nestjs/swagger';
import {category} from "../../categories/schemas/category.schema";



@Entity({ name: 'sellers' })

export class seller{

    @ApiProperty()
    @PrimaryGeneratedColumn('uuid')
    id: string;


    @ApiProperty()
    @Column({unique:true})
    sellerId: string;


    @ApiProperty()
    @Column({unique:true})
    sellerName: string;



    @ManyToMany(() => category, category => category.sellers)
    @JoinTable()
    categories: category[];

    // @ApiProperty({type: () => category})
    // @ManyToOne(() => category, { eager: true })
    // @JoinColumn({ name: ' category_ID' })
    // category: category;


}

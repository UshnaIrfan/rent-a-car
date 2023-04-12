import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';
import { seller } from "../../sellers/schemas/seller.schema";


@Entity({ name: 'categories' })
export class category{

    @ApiProperty()
    @PrimaryGeneratedColumn('uuid')
    id: string;


    @ApiProperty()
    @Column()
    categoryName: string;


    @ApiProperty()
    @Column('bool')
    approvedByAdmin: boolean;


    @ApiProperty()
    @Column('bool')
    isListing: boolean;



    @ApiProperty({ type: () => [seller] })
    @ManyToMany(() => seller, seller => seller.categories)
    @JoinTable()
    sellers: seller[];

}

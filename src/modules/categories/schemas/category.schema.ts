import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';
import { sellerCategory } from "../../sellers/schemas/sellerCategory.schema";


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


   @OneToMany(() => sellerCategory, sellerCategory => sellerCategory.category)
   sellerCategories: sellerCategory[];

}

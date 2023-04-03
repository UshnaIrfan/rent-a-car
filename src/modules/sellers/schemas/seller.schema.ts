import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,

} from "typeorm";
import { ApiProperty } from '@nestjs/swagger';
import { sellerCategory } from "./sellerCategory.schema";


@Entity({ name: 'sellers' })
export class seller{

     @ApiProperty()
     @PrimaryGeneratedColumn('uuid')
     id: string;


     @ApiProperty()
     @Column({unique:true , nullable: true})
     sellerName: string;


     @ApiProperty()
     @Column({unique:true , nullable: true})
     sellerUrl: string;


     @ApiProperty()
     @Column('bool')
     approvedByAdmin: boolean;


    @ApiProperty()
    @Column('bool')
    isListing: boolean;


    @OneToMany(() => sellerCategory, sellerCategory => sellerCategory.seller)
    sellerCategories: sellerCategory[];

}

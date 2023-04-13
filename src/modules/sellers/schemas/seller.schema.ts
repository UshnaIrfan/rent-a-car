import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany
} from "typeorm";
import { ApiProperty } from '@nestjs/swagger';
import { category } from "../../categories/schemas/category.schema";


@Entity({ name: 'sellers' })
export class seller{

     @ApiProperty()
     @PrimaryGeneratedColumn('uuid')
     id: string;



     @ApiProperty()
     @Column({ nullable: true})
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



     @ApiProperty()
     @Column({ default: null, nullable: true })
     userId: string;



     @ApiProperty({ type: () => [category] })
     @ManyToMany(() => category, category => category.sellers, { cascade: true })
     categories: category[];


}
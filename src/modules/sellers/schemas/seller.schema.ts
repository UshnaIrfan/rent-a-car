import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany, CreateDateColumn, UpdateDateColumn
} from "typeorm";
import { ApiProperty } from '@nestjs/swagger';
import { category } from "../../categories/schemas/category.schema";

export enum status {
     PENDING = 'pending',
     APPROVED = 'approved',
     REJECTED = 'rejected'
}


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
      @Column(
    { type:"enum", enum: status, default: status.PENDING })
     approvedByAdmin: string;



      @ApiProperty()
      @Column('bool')
      isListing: boolean;


      @ApiProperty()
      @CreateDateColumn()
      createdAt: Date


      @ApiProperty()
      @UpdateDateColumn()
      updatedDate: Date


     @ApiProperty({ type: () => [category] })
     @ManyToMany(() => category, category => category.sellers, { cascade: true })
     categories: any[];


}

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinTable, OneToMany
} from "typeorm";
import { ApiProperty } from '@nestjs/swagger';
import { category } from "../../categories/schemas/category.schema";
import { review } from "../../review/schemas/submit-review.schema";

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
      @Column({ type:"enum", enum: status, default: status.PENDING })
      approvedByAdmin: string;



      @ApiProperty()
      @Column('bool')
      isListing: boolean;


      @ApiProperty()
      @CreateDateColumn()
      createdAt: Date


      @ApiProperty()
      @UpdateDateColumn()
      updatedAt: Date


     @ApiProperty({ type: () => [category] })
     @ManyToMany(() => category, category => category.sellers, { cascade: true })
     categories: any[];


     // relation between user and seller
     @ApiProperty({ type: () => [review] })
     @OneToMany(() => review, review => review.seller)
     @JoinTable()
     review: review[];

}

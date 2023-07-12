import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, CreateDateColumn, UpdateDateColumn, JoinTable, OneToMany } from "typeorm";
import { category } from "../../categories/schemas/category.schema";
import { review } from "../../review/schemas/submit-review.schema";
import { ApiProperty } from "@nestjs/swagger";

export enum status {
     PENDING = 'pending',
     APPROVED = 'approved',
     REJECTED = 'rejected'
}


export enum type {
  NATIONAL= 'U.S. National, Regional & Online',
  LOCAL = 'Local Only',
  OUTSIDE = 'Outside the U.S.',
  B2B='B2B'
}


@Entity({ name: 'sellers' })
export class seller{

      @ApiProperty()
      @PrimaryGeneratedColumn('uuid')
      id: string;



      @ApiProperty()
      @Column({ unique:true,nullable: true})
      sellerName: string;


      @ApiProperty()
      @Column({unique:true , nullable: true})
      sellerUrl: string;


      @ApiProperty()
      @Column({ type:"enum", enum: status, default: status.PENDING })
      approvedByAdmin: string;


      @ApiProperty()
      @Column({ type:"enum", enum: type, default: type.NATIONAL})
      type: string;


      @ApiProperty()
      @Column({nullable: true})
      country: string;


      @ApiProperty()
      @Column({ nullable: true})
      city: string;


      @ApiProperty()
      @Column({ nullable: true})
      state: string;


      @ApiProperty()
      @Column({ nullable: true})
      address: string;

      @ApiProperty()
      @Column('bool')
      isListing: boolean;


      @ApiProperty()
      @CreateDateColumn()
      createdAt: Date


      @ApiProperty()
      @UpdateDateColumn()
      updatedAt: Date


     // relation between category and seller
     @ApiProperty({ type: () => [category] })
     @ManyToMany(() => category, category => category.sellers, { cascade: true })
     categories: any[];


     // relation between review and seller
     @ApiProperty({ type: () => [review] })
     @OneToMany(() => review, review => review.seller)
     @JoinTable()
     review: review[];

}

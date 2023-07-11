import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";
import { seller } from "../../sellers/schemas/seller.schema";
import { ApiProperty } from "@nestjs/swagger";

export enum status {
     PENDING = 'pending',
     APPROVED = 'approved',
     REJECTED = 'rejected'
}

@Entity({ name: 'categories' })
export class category{

    @ApiProperty()
    @PrimaryGeneratedColumn('uuid')
    id: string;


    @ApiProperty()
    @Column({unique:true , nullable: true})
    categoryName: string;


    @ApiProperty()
    @Column(
      {
          type:"enum",
          enum: status,
          default: status.PENDING
      })
     approvedByAdmin: string;


     @ApiProperty()
     @CreateDateColumn()
     createdAt: Date


     @ApiProperty()
     @UpdateDateColumn()
     updatedAt: Date


     @ApiProperty({ type: () => [seller] })
     @ManyToMany(() => seller, seller => seller.categories)
     @JoinTable()
     sellers: seller[];

}

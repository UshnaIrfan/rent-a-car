import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';
import { seller } from "../../sellers/schemas/seller.schema";

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
    @Column()
    categoryName: string;


    @ApiProperty()
    @Column(
      {
          type:"enum",
          enum: status,
          default: status.PENDING
      })
    approvedByAdmin: string;




    // @ApiProperty()
    // @Column('bool')
    // isListing: boolean;


    @ApiProperty({ type: () => [seller] })
    @ManyToMany(() => seller, seller => seller.categories)
    @JoinTable()
    sellers: seller[];

}

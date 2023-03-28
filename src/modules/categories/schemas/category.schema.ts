import { Entity, Column, PrimaryGeneratedColumn, ManyToMany} from "typeorm";
import { ApiProperty } from '@nestjs/swagger';
import { seller } from "../../sellers/schemas/seller.schema";


@Entity({ name: 'categories' })
export class category{

   @ApiProperty()
   @PrimaryGeneratedColumn('uuid')
   id: string;


   @ApiProperty()
   @Column({unique:true})
   categoryId: string;


   @ApiProperty()
   @Column()
   categoryName: string;



   @ManyToMany(() => seller, seller => seller.categories)
   sellers: seller[];

}

import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';
import { clicks } from "./create-clicks-titles.schema";

@Entity({ name: 'clicksTypes' })
export class clicksTypes{

     @ApiProperty()
     @PrimaryGeneratedColumn('uuid')
     id: string;


     @ApiProperty()
     @Column({unique:true})
     type: string;



     @ApiProperty()
     @Column({nullable: true ,type: 'longtext'})
     image: string;


    // @ManyToMany(() => clicks, clicks=> clicks.clicksTypes, { cascade: true })
    // clicks: clicks[];

}

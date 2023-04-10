import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';


@Entity({ name: 'clicksTitle' })
export class clicksTitle{

     @ApiProperty()
     @PrimaryGeneratedColumn('uuid')
     id: string;


     @ApiProperty()
     @Column({unique:true})
     slug: string;


     @ApiProperty()
     @Column({unique:true})
     title: string;


     @ApiProperty()
     @Column()
     type: string;


    @ApiProperty()
    @Column({nullable: true ,type: 'longtext'})
    image: string;



}



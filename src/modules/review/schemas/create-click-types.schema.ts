import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';


@Entity({ name: 'clicksTypes' })
export class clicksTypes{

     @ApiProperty()
     @PrimaryGeneratedColumn('uuid')
     id: string;



     @ApiProperty()
     @Column({unique:true})
     type: string;



}

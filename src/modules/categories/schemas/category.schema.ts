import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'category' })

export class category{

  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;


   @ApiProperty()
   @Column({unique:true})
   category_ID: string;

   @ApiProperty()
   @Column()
   category_name: string;


}

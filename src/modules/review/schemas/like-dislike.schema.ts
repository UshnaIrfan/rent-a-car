import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'likeDislike' })
export class likeDislikeSchema{

    @ApiProperty()
    @PrimaryGeneratedColumn('uuid')
    id: string;


    @ApiProperty()
    @Column({unique:true})
    userId: string;


   @ApiProperty()
   @Column({unique:true})
   reviewId: string;

   @ApiProperty()
   @Column({unique:true})
   like: number;

   @ApiProperty()
   @Column({unique:true})
   dislike: number;

}



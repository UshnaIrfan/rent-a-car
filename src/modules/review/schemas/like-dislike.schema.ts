import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'likeDislike' })
export class likeDislikeSchema{

    @ApiProperty()
    @PrimaryGeneratedColumn('uuid')
    id: string;


    @ApiProperty()
    @Column({})
    userId: string;


   @ApiProperty()
   @Column({})
   reviewId: string;


}



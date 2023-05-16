import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';

export enum status {
    LIKE = 'like',
    DISLIKE = 'dislike',
    REPORT = 'report'
}



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


    @ApiProperty()
    @Column(
      {
          type:"enum",
          enum: status,
      })
    type: string;


    @ApiProperty()
    @CreateDateColumn()
    createdAt: Date


    @ApiProperty()
    @UpdateDateColumn()
    updatedAt: Date


}



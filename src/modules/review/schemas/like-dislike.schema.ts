import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToMany,
    JoinTable, JoinColumn, ManyToOne, OneToMany
} from "typeorm";
import { ApiProperty } from '@nestjs/swagger';
import { review } from "./submit-review.schema";

export enum status {
    LIKE = 'like',
    DISLIKE = 'dislike',
    REPORT = 'report'
}



@Entity({ name: 'likeDislike' })
export class likeDislike{

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




    // relation between reviews and likeDislike review table
    @ApiProperty({ type: () => [review] })
    @ManyToOne(() => review, review => review.likeDislike)
    review: review[];





}



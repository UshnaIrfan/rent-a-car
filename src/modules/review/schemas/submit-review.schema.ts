import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'review' })
export class review{

     @ApiProperty()
     @PrimaryGeneratedColumn('uuid')
     id: string;


     @ApiProperty()
     @Column()
     sellerId: string;



     @ApiProperty()
     @Column({default: null, nullable: true})
     titleId: string;


     @ApiProperty()
     @Column({default: null, nullable: true})
     titleSlug: string;


     @ApiProperty()
     @Column({ default: null,nullable: true})
     message: string;


     @ApiProperty()
     @Column()
     userId: string;


     @ApiProperty()
     @Column('bool')
     approvedByAdmin: boolean;


     @ApiProperty()
     @CreateDateColumn()
     createdAt: Date


     @ApiProperty()
     @UpdateDateColumn()
     updatedDate: Date

}

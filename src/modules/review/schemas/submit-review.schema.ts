import {
     Entity,
     Column,
     PrimaryGeneratedColumn,
     CreateDateColumn,
     UpdateDateColumn,
    JoinTable, ManyToOne, OneToMany,
} from "typeorm";
import { ApiProperty } from '@nestjs/swagger';
import { seller } from "../../sellers/schemas/seller.schema";
import { User } from "../../users/schemas/user.schema";
import { likeDislike } from "./like-dislike.schema";

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
     @Column({ default: null,nullable: true,type: 'longtext'})
     message: string;


     @ApiProperty()
     @Column()
     userId: string;


     @ApiProperty()
     @Column('bool')
     approvedByAdmin: boolean;

     @ApiProperty()
     @Column('bool')
     bestWriter: boolean;


     @ApiProperty()
     @CreateDateColumn()
     createdAt: Date


     @ApiProperty()
     @UpdateDateColumn()
     updatedAt: Date


     // relation between user and review
     @ApiProperty({ type: () => [User] })
     @ManyToOne(() => User, User => User.review)
     @JoinTable()
     User: User[];




     // relation between user and seller
     @ApiProperty({ type: () => [seller] })
     @ManyToOne(() => seller, seller => seller.review)
     @JoinTable()
     seller: seller[];




     // relation between reviews and likeDislike review table
     @ApiProperty({ type: () => [likeDislike] })
     @OneToMany(() => likeDislike, likeDislike => likeDislike.review)
     @JoinTable()
     likeDislike: likeDislike[];


}

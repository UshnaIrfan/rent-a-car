import {
     Entity,
     Column,
     PrimaryGeneratedColumn,
     BeforeInsert,
     CreateDateColumn,
     UpdateDateColumn,
     ManyToMany, JoinTable, ManyToOne
} from "typeorm";
import { ApiProperty } from '@nestjs/swagger';
import { seller } from "../../sellers/schemas/seller.schema";
import { User } from "../../users/schemas/user.schema";

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
     updatedAt: Date


     @ApiProperty({ type: () => [User] })
     @ManyToOne(() => User, User => User.review)
     @JoinTable()
     User: User[];


}

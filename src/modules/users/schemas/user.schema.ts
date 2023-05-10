import {
     Entity,
     Column,
     PrimaryGeneratedColumn,
     CreateDateColumn,
     UpdateDateColumn,
     OneToMany
} from "typeorm";
import { ApiProperty } from '@nestjs/swagger';
import { review } from "../../review/schemas/submit-review.schema";

@Entity({ name: 'users' })

export class User {

     @ApiProperty()
     @PrimaryGeneratedColumn('uuid')
     id: string;


     @ApiProperty()
     @Column({})
     name: string;


     @ApiProperty()
     @Column({ unique: true })
     username: string;


     @ApiProperty()
     @Column({ unique: true })
     email: string;

     @ApiProperty()
     @Column({ unique: true })
     password: string;



     @ApiProperty()
     @Column({ default: 'L2A_USER',nullable:true})
     roles: string;


     @ApiProperty()
     @Column('bool')
     isActive: boolean;


     @ApiProperty()
     @CreateDateColumn()
     createdAt: Date


     @ApiProperty()
     @UpdateDateColumn()
     updatedAt: Date


     @ApiProperty({ type: () => [review] })
     @OneToMany(() => review, review => review.User, { cascade: true })
     review: review[];


}

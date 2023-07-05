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


export enum status {
     ACTIVE= 'active',
     INACTIVE = 'inactive',
}


export enum blockStatus {
     BLOCK= 'block',
     UNBLOCK = 'unblock',
}


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
      @Column({})
     // @Column({ unique: true })
     password: string;



     @ApiProperty()
     @Column({ default: 'L2A_USER',nullable:true})
     roles: string;


     @ApiProperty()
     @Column({ type:"enum", enum: status, default: status.INACTIVE })
     status: string;



     @ApiProperty()
     @Column({ type:"enum", enum: blockStatus, default: blockStatus.UNBLOCK })
     blockStatus: string;


     @ApiProperty()
     @Column({type: 'longtext'})
     profileIcon: string;
     length: Boolean;



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

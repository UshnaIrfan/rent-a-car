import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";
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
     @Column()
     balloonId: string;


     @ApiProperty()
     @Column({ default: null, nullable: true })
     message: string;


}

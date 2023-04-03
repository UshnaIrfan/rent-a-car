import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'review' })
export class review{

    @ApiProperty()
    @PrimaryGeneratedColumn('uuid')
    id: string;


    @ApiProperty()
    @Column()
    sellerID: string;


    @ApiProperty()
    @Column()
    categoryID: string;


    @ApiProperty()
    @Column()
    reactionName: string;


    @ApiProperty()
    @Column()
    comment: string;

}

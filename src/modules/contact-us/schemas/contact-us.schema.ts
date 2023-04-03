import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'contact-us' })
export class contact{

    @ApiProperty()
    @PrimaryGeneratedColumn('uuid')
    id: string;


    @ApiProperty()
    @Column()
    email: string;


    @ApiProperty()
    @Column()
    message: string;

}

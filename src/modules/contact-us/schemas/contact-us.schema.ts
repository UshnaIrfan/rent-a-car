import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';

export enum status {
    INREVIEW = 'inreview',
    COMPLETE = 'complete',
    PENDING = 'pending'
}


@Entity({ name: 'contact_us' })
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



    @ApiProperty()
    @Column({ type:"enum", enum: status, default: status.PENDING })
    status: string;


    @ApiProperty()
    @CreateDateColumn()
    createdAt: Date


    @ApiProperty()
    @UpdateDateColumn()
    updatedAt: Date

}

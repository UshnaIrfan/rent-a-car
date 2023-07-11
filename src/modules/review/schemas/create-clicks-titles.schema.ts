import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity({ name: 'clicksTitle' })
export class clicksTitle{

     @ApiProperty()
     @PrimaryGeneratedColumn('uuid')
     id: string;


     @ApiProperty()
     @Column({unique:true})
     slug: string;


     @ApiProperty()
     @Column({unique:true})
     title: string;


     @ApiProperty()
     @Column()
     type: string;


     @ApiProperty()
     @Column({nullable: true ,type: 'longtext'})
     image: string;
     length: Boolean;


     @ApiProperty()
     @Column()
     imageName: string;


     @ApiProperty()
     @CreateDateColumn()
     createdAt: Date


     @ApiProperty()
     @UpdateDateColumn()
     updatedAt: Date

}



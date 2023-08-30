import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity({ name: 'time' })
export class  time {

      @ApiProperty()
      @PrimaryGeneratedColumn('uuid')
      id: string;


      @ApiProperty()
      @Column({nullable:true})
      time: string;


      @ApiProperty()
      @CreateDateColumn()
      createdAt: Date


      @ApiProperty()
      @UpdateDateColumn()
      updatedAt: Date

}

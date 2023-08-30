import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity({ name: 'year' })
export class  year {

      @ApiProperty()
      @PrimaryGeneratedColumn('uuid')
      id: string;


      @ApiProperty()
      @Column({nullable:true})
      year: string;

      @ApiProperty()
      @CreateDateColumn()
      createdAt: Date


      @ApiProperty()
      @UpdateDateColumn()
      updatedAt: Date

}

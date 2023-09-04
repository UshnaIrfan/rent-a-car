import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity({ name: 'packages' })
export class  packages {


  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;



  @ApiProperty()
  @Column({nullable:true})
  packages: string;


  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date



  @ApiProperty()
  @UpdateDateColumn()
  updatedAt: Date

}

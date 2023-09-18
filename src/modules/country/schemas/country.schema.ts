import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity({ name: 'country' })
export class  country {

  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;


  @ApiProperty()
  @Column({nullable:true,unique:true})
  countryName: string;


  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date



  @ApiProperty()
  @UpdateDateColumn()
  updatedAt: Date

}

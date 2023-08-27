import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity({ name: 'car_type' })
export class  carType {

  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;


  @ApiProperty()
  @Column({nullable:true})
  carType: string;


  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date



  @ApiProperty()
  @UpdateDateColumn()
  updatedAt: Date

}

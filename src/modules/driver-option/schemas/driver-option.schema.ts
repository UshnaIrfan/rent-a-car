import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity({ name: 'driver_option' })
export class  driverOption {

      @ApiProperty()
      @PrimaryGeneratedColumn('uuid')
      id: string;


      @ApiProperty()
      @Column({nullable:true})
      driverOption: string;


      @ApiProperty()
      @CreateDateColumn()
      createdAt: Date


      @ApiProperty()
      @UpdateDateColumn()
      updatedAt: Date

}

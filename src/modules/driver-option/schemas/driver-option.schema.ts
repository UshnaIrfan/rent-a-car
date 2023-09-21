// import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
// import { ApiProperty } from "@nestjs/swagger";
//
// export enum  driverOptionStatus {
//        DRIVER= 'withDriver',
//        NOTDRIVER = 'notDriver'
// }
//
// @Entity({ name: 'driver_option' })
// export class  driverOption {
//
//       @ApiProperty()
//       @PrimaryGeneratedColumn('uuid')
//       id: string;
//
//
//       @ApiProperty()
//       @Column({enum: driverOptionStatus , default: driverOptionStatus.DRIVER,unique:true})
//       driverOption: string;
//
//
//       @ApiProperty()
//       @CreateDateColumn()
//       createdAt: Date
//
//
//       @ApiProperty()
//       @UpdateDateColumn()
//       updatedAt: Date
//
// }

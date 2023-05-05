// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Document } from 'mongoose';
// import { ApiProperty } from '@nestjs/swagger';
// import { ObjectId } from 'mongodb';
// export type UserDocument = User & Document;
//
// @Schema({
//   collection: 'users',
//   timestamps: true,
// })
// export class User {
//       @ApiProperty()
//       @Prop({
//         type: ObjectId,
//       default: () => {
//        return new ObjectId();
//       }
//       })
//        _id: ObjectId;
//
//      @ApiProperty()
//      @Prop({
//        required: true,
//        unique: true,
//        type: String,
//       })
//        username: string;
//
//      @ApiProperty()
//      @Prop({
//      required: true,
//      unique: true,
//      type: String,
//      })
//       email: string;
//
//      @ApiProperty()
//      @Prop({
//      required: true,
//      type: String,
//      index: true,
//      })
//       password: string;
//
//     @ApiProperty()
//     @Prop({
//      required: false,
//      type: String,
//      index: true,
//      })
//      mobile_no: string;
//
// }
// export const UserSchema = SchemaFactory.createForClass(User);



import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';
import { Role } from "../../../enums/role.enum";
import { Prop } from "@nestjs/mongoose";

@Entity({ name: 'users' })

export class User {

     @ApiProperty()
     @PrimaryGeneratedColumn('uuid')
     id: string;


     @ApiProperty()
     @Column({})
     name: string;


     @ApiProperty()
     @Column({ unique: true })
     username: string;


     @ApiProperty()
     @Column({ unique: true })
     email: string;

     @ApiProperty()
     @Column({ unique: true })
     password: string;



     @ApiProperty()
     @Column({ default: 'L2A_USER',nullable:true})
     roles: string;


     @ApiProperty()
     @Column('bool')
     isActive: boolean;


     @ApiProperty()
     @CreateDateColumn()
     createdAt: Date


     @ApiProperty()
     @UpdateDateColumn()
     updatedDate: Date

}

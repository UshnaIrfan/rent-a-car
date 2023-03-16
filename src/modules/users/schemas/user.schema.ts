import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { ObjectId } from 'mongodb';
export type UserDocument = User & Document;

@Schema({
  collection: 'users',
  timestamps: true,
})
export class User {
  @ApiProperty()
  @Prop({
    type: ObjectId,
    default: () => {
      return new ObjectId();
    },
  })
  _id: ObjectId;

  @ApiProperty()
  @Prop({
    required: true,
    unique: true,
    type: String,
  })
  username: string;

  @ApiProperty()
  @Prop({
    required: true,
    unique: true,
    type: String,
  })
  email: string;

  @ApiProperty()
  @Prop({
    required: true,
    type: String,
    index: true,
  })
  password: string;
}
export const UserSchema = SchemaFactory.createForClass(User);

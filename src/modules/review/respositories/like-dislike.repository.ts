import { Injectable} from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {likeDislikeSchema} from "../schemas/like-dislike.schema";

@Injectable()
export class likeDislikeRepository{
  constructor(
    @InjectRepository(likeDislikeSchema) private likeDislike: Repository<likeDislikeSchema>,
  ){}






}



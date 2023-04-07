import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, BeforeInsert } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';
import { clicksTypes } from "./create-click-types.schema";
import slugify from 'slugify';

@Entity({ name: 'clicksTitles' })
export class clicks{

      @ApiProperty()
      @PrimaryGeneratedColumn('uuid')
      id: string;


      @ApiProperty()
      @Column({unique:true})
      slug: string;


     @BeforeInsert()
     transformSlugToLowerCase() {
         this.slug = slugify(this.slug, { lower: true });
     }



    // @ManyToMany(() => clicksTypes, clicksTypes => clicksTypes.clicks)
    // @JoinTable()
    // clicksTypes: clicksTypes[];


}


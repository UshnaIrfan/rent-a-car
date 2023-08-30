import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BeforeUpdate, BeforeInsert, OneToMany, OneToOne } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import slugify from "slugify";


export enum  verifyType {
  LOCAL= 'Local',
  INTERNATIONAL = 'International',
}


@Entity({ name: 'users_verification_documents'})
export class UserVerificationDocuments {


        @ApiProperty()
        @PrimaryGeneratedColumn('uuid')
        id: string;



        @ApiProperty()
        @Column({ enum: verifyType })
        type: string;



        @ApiProperty()
        @Column({nullable:true  })
        title: string;


        @ApiProperty()
        @Column({nullable:true  })
        priority: string;



        @ApiProperty()
        @Column({ nullable: true ,unique:true})
        slug: string;



        @ApiProperty()
        @CreateDateColumn()
        createdAt: Date


        @ApiProperty()
        @UpdateDateColumn()
        updatedAt: Date



        @BeforeInsert()
        @BeforeUpdate()
        generateSlug() {
          if (this.slug) {
            this.slug = slugify(this.slug, { replacement: '_', lower: true });
          }
        }



}

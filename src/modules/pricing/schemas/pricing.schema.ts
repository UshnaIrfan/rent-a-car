import {
      Entity,
      Column,
      PrimaryGeneratedColumn,
      CreateDateColumn,
      UpdateDateColumn,
      OneToMany,
      ManyToOne, JoinColumn
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { car } from "../../car/schemas/car.schema";

@Entity({ name: 'pricing' })
export class  pricing {

      @ApiProperty()
      @PrimaryGeneratedColumn('uuid')
      id: string;


      @ApiProperty()
      @Column({nullable:true})
      timeId: string;


      @ApiProperty()
      @Column({nullable:true})
      carId: string;


      @ApiProperty()
      @Column({nullable:true})
      price: string;

      @ApiProperty()
      @Column({nullable:true})
      userId: string;

      @ApiProperty()
      @CreateDateColumn()
      createdAt: Date



      @ApiProperty()
      @UpdateDateColumn()
      updatedAt: Date


      //relation  btw pricing and car
      @ApiProperty({ type: () => [car] })
      @ManyToOne(() => car, car => car.pricing, { onDelete: 'CASCADE' })
      @JoinColumn({ name: 'carId' })
      car: car[];

}

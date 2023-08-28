import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";


@Entity({ name: 'cars' })
export class car {

  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;


  @ApiProperty()
  @Column({nullable:true})
  brandId: string;


  @ApiProperty()
  @Column({nullable:true  })
  modelId: string;



  @ApiProperty()
  @Column({nullable:true  })
  yearId: string;


  @ApiProperty()
  @Column({nullable:true  })
  colorId: string;


  @ApiProperty()
  @Column({nullable:true  })
  transmissionId: string;



  @ApiProperty()
  @Column({nullable:true  })
  carTypeId: string;


  @ApiProperty()
  @Column({nullable:true})
  baggageOptionId: string;


  @ApiProperty()
  @Column({nullable:true})
  seatsCapacityId: string;



  @ApiProperty()
  @Column({nullable:true})
  mileage: string;



  @ApiProperty()
  @Column({nullable:true})
  chassyNo: string;



  @ApiProperty()
  @Column({nullable:true})
  numberPlate: string;


  @ApiProperty()
  @Column({nullable:true})
  securityAmount: string;



  @ApiProperty()
  @Column({nullable:true})
  driverOptionId: string;



  @ApiProperty()
  @Column({nullable:true})
  description: string;


  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date


  @ApiProperty()
  @UpdateDateColumn()
  updatedAt: Date



}

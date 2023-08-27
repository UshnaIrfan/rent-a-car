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
  company: string;


  @ApiProperty()
  @Column({nullable:true  })
  model: string;



  @ApiProperty()
  @Column({nullable:true  })
  year: string;


  @ApiProperty()
  @Column({nullable:true  })
  color: string;


  @ApiProperty()
  @Column({nullable:true  })
  transmission: string;



  @ApiProperty()
  @Column({nullable:true  })
  carType: string;


  @ApiProperty()
  @Column({nullable:true})
  baggageOption: string;


  @ApiProperty()
  @Column({nullable:true})
  seatsCapacity: string;



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
  driverOption: string;



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

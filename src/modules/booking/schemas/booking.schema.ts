import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne, JoinColumn
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import {car} from "../../car/schemas/car.schema"
import {User} from "../../users/schemas/user.schema"
import { driver } from "../../driver/schemas/driver.schema";


export enum bookingStatus {
      BOOKED= 'booked',
      CANCELLED = 'cancelled',
}


@Entity({ name: 'booking' })
export class  booking {

      @ApiProperty()
      @PrimaryGeneratedColumn('uuid')
      id: string;


      @ApiProperty()
      @Column({nullable:true})
      userId: string;



      @ApiProperty()
      @Column({nullable:true})
      carId: string;


      @ApiProperty()
      @Column({nullable:true})
      packagesId: string;



      @ApiProperty()
      @Column({nullable:true})
      driverId: string;


      @ApiProperty()
      @Column({nullable:true})
      pickupDate: Date;


      @ApiProperty()
      @Column({nullable:true})
      dropoffDate: Date;


      @ApiProperty()
      @Column({nullable:true})
      pickupTime: string;


      @ApiProperty()
      @Column({nullable:true})
      dropoffTime: string;


      @ApiProperty()
      @Column({  enum: bookingStatus , default: bookingStatus.BOOKED  })
      bookingStatus: string;


      @ApiProperty()
      @CreateDateColumn()
      createdAt: Date


      @ApiProperty()
      @UpdateDateColumn()
      updatedAt: Date



      //relation  btw car and booking
      @ApiProperty({ type: () => [car] })
      @ManyToOne(() => car, car => car.booking, { onDelete: 'CASCADE' })
      @JoinColumn({ name: 'carId' })
      car: car[];


      //relation  btw user and booking
      @ApiProperty({ type: () => [User] })
      @ManyToOne(() => User, User => User.booking, { onDelete: 'CASCADE' })
      @JoinColumn({ name: 'userId' })
      User: User[];



      //relation  btw booking and driver
      @ApiProperty({ type: () => [driver] })
      @ManyToOne(() => driver, driver => driver.booking, { onDelete: 'CASCADE' })
      @JoinColumn({ name: 'driverId' })
      driver: driver[];


}

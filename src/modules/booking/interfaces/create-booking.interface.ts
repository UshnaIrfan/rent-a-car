export default interface createBookingInterface {
  readonly carId: string;
  readonly packagesId: string;
  readonly driverId: string;
  readonly pickupDate: Date;
  readonly dropoffDate: Date;
  readonly pickupTimeId: string;
  readonly dropoffTimeId: string;
}
export default interface createBookingInterface {
  readonly carId: string;
  readonly packagesId: string;
  readonly driverId: string;
  readonly pickupDate: Date;
  readonly dropoffDate: Date;
  readonly pickupTime: string;
  readonly dropoffTime: string;
  readonly bookingStatus: string;



}
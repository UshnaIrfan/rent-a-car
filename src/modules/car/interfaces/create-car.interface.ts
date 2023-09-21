export default interface createCarInterface {
  readonly brandId: string;
  readonly modelId: string;
  readonly yearId: string;
  readonly  colorId: string;
  readonly transmissionId: string;
  readonly  carTypeId: string;
  readonly baggageOptionId: string;
  readonly  seatsCapacityId: string;
  readonly mileage: string;
  readonly  chassyNo: string;
  readonly numberPlate: string;
  readonly  securityAmount: string;
  readonly  driverIds: string[];

  //readonly driverOptionId: string;
  readonly  description: string;
  readonly latitude: string;
  readonly  longitude: string;
  readonly pickUpLocation: string;
  readonly  dropOffLocation: string;
}
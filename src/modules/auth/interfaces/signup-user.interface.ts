export default interface signupUserInterface {
   readonly firstName: string;
   readonly lastName: string;
   readonly email: string;
   readonly  password: string;
   readonly confirmPassword: string;
   readonly countryId: string;
   readonly  dateOfBirth: Date;
   readonly phoneNo: string;
   readonly  image: string;
   readonly roles: string;
   readonly otpStatus: string;
   readonly blockStatus: string;
}
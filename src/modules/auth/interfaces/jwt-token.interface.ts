export default interface JwtTokensInterface {
    readonly id:string;
    readonly firstname: string;
    readonly lastname: string;
    readonly email: string;
    readonly country: string;
    readonly  date_of_birth: Date;
    readonly phone_no: string;
    readonly  image: string;
    readonly roles: string;
    readonly otp_status: string;
    readonly blockStatus: string;
    readonly  access_token: string;

}

export default interface JwtTokensInterface {

  readonly id:string;
  readonly name:string;
  readonly username: string;
  readonly email: string;
  readonly roles:string;
  readonly  access_token: string;

}

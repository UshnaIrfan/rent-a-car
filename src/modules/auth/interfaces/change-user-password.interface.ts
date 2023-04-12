export default interface changeUserPasswordInterface{

   readonly resetToken: string;
   readonly email: string;
   readonly newPassword: string;
   readonly  confirmPassword: string;

}
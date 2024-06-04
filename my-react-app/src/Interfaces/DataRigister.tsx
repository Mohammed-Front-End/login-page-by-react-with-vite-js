export interface IUserData {
  userName: string;
  userEmail: string;
  userPassword: string;
  userPhone: string;
}
export interface IFormInput {
  label: string,
  type: string,
  id: string,
  name:keyof IUserData,
}
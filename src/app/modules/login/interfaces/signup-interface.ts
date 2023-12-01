export interface ICreatedUser {
  name: string;
  email: string;
  document: string;
  phone: string;
  password: string;
  passwordConfirm: string;
}

export interface ICreateUser {
  name: string;
  email: string;
  password: string;
}

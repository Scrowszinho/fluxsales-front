export interface IUserClean {
  name: string;
  email: string;
  born_date: string;
}

export interface IUserLoged {
  user: IUserClean;
  token: string;
  expires_in: Date
}

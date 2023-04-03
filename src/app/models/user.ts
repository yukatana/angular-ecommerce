export interface User {
  firstName: string;
  lastName: string;
  username: string;
  password?: string; // password is optional since it's not returned by the server
  address?: string;
  phone?: string;
  token?: string; // for JWT implementation
}

export interface UserCredentials {
  username: string;
  password: string;
}

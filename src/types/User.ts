// src/types/User.ts
export interface User {
  id?: number;
  username: string;
  email: string;
  password: string;
}

export interface UserRegister {
  username: string;
  email: string;
  password: string;
}

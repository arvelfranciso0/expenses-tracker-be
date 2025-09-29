export interface UserAttributes {
  id?: number;
  name: string;
  email: string;
  password: string;
  address?: string;
  phone_number?: string;
  createdAt?: string;
  isVerified?: boolean;
}

export interface UserAuth {
  email: string;
  password: string;
  createdAt?: string;
}

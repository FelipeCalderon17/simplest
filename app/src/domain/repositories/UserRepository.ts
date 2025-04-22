import { UserModel } from "../models/User";

export interface UserRepository {
  loginUser(user: UserModel): Promise<{ token: string }>;
  registerUser(user: UserModel): Promise<{ user: UserModel; token: string }>;
  getUsers(): Promise<UserModel[]>;
  updateUser(user: UserModel): Promise<UserModel>;
  deleteUser(id: number): Promise<boolean>;
}

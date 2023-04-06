import { IUser, UserProps } from "../../repository/interfaces/user";

interface IUserService {
  store(name: string, email: string): Promise<UserProps>;
  deleteUserById(id: string): Promise<void>;
  getUserById(id: string): Promise<UserProps>;
  getAllUsers(): Promise<UserProps[]>;
}

export default class UserService implements IUserService {
  private user: IUser;

  constructor(user: IUser) {
    this.user = user;
  }

  async store(name: string, email: string): Promise<UserProps> {
    const emailExists = await this.user.findUserByEmail(email);
    if (emailExists) {
      throw new Error("Email is already in use");
    }

    if (!name) {
      throw new Error("Name is required");
    }
    if (!email) {
      throw new Error("Email is required");
    }

    const user = await this.user.create(name, email);
    return user;
  }

  async getAllUsers(): Promise<UserProps[]> {
    const users = await this.user.findAll();
    return users;
  }

  async getUserById(id: string): Promise<UserProps> {
    const user = await this.user.findById(id);
    return user;
  }

  async deleteUserById(id: string): Promise<void> {
    await this.user.deleteUser(id);
  }
}

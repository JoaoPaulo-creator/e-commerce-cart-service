import { IUser } from "../../repository/interfaces/user";

interface IUserService {
  store(name: string, email: string): any;
  deleteUserById(id: string): Promise<void>;
  getUserById(id: string): Promise<any>;
  getAllUsers(): Promise<any>;
}

export default class UserService implements IUserService {
  private user: IUser;

  constructor(user: IUser) {
    this.user = user;
  }

  async store(name: string, email: string) {
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

  async getAllUsers() {
    const users = await this.user.findAll();
    return users;
  }

  async getUserById(id: string) {
    const user = await this.user.findById(id);
    return user;
  }

  async deleteUserById(id: string) {
    await this.user.deleteUser(id);
  }
}

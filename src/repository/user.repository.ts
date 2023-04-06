import { userModel } from "../models/user.model";
import { IUser } from "./interfaces/user";

export default class UserRepository implements IUser {
  async findById(id: string) {
    const user = await userModel.findOne({ id });
    return user;
  }

  async deleteUser(id: string): Promise<void> {
    await userModel.findByIdAndDelete(id);
  }

  async findUserByEmail(userEmail: string) {
    const email = await userModel.findOne({ email: userEmail });
    return email;
  }

  async create(name: string, email: string) {
    const user = await userModel.create({ name, email });
    return user;
  }

  async findAll() {
    const users = await userModel.find();
    return users;
  }

  async updateUser(id: string) {
    const user = await userModel.findByIdAndUpdate({ id }, { new: true });
    return user;
  }
}

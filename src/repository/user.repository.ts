import { userModel } from "../models/user.model";
import { IUser, UserProps } from "./interfaces/user";

export default class UserRepository implements IUser {
  async findById(id: string): Promise<UserProps> {
    const user = await userModel.findOne({ id }).lean();
    return user;
  }

  async deleteUser(id: string): Promise<void> {
    await userModel.findByIdAndDelete(id);
  }

  async findUserByEmail(userEmail: string): Promise<UserProps> {
    // In this example, we use the lean() method to return plain JavaScript objects instead of Mongoose documents.
    // This makes the return type much simpler and easier to read.
    const email = await userModel.findOne({ email: userEmail }).lean();
    return email;
  }

  async create(name: string, email: string): Promise<UserProps> {
    const user = await userModel.create({ name, email });
    return user;
  }

  async findAll(): Promise<UserProps[]> {
    const users = await userModel.find();
    return users;
  }

  async updateUser(id: string): Promise<UserProps> {
    const user = await userModel
      .findByIdAndUpdate({ id }, { new: true })
      .lean();
    return user;
  }
}

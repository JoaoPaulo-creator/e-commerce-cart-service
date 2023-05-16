export interface UserProps {
  name: string
  email: string
}

export interface IUser {
  create(name: string, email: string): Promise<UserProps>
  findAll(): Promise<UserProps[]>
  updateUser(id: string): Promise<UserProps>
  findUserByEmail(email: string): Promise<UserProps>
  findById(id: string): Promise<UserProps>
  deleteUser(id: string): Promise<void>
}

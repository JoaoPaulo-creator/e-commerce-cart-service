import { Document, Types } from "mongoose";

export interface IUser {
  create(
    name: string,
    email: string
  ): Promise<
    Document<
      unknown,
      {},
      {
        name: string;
        email: string;
        createdAt: Date;
      }
    > &
      Omit<
        {
          name: string;
          email: string;
          createdAt: Date;
        } & {
          _id: Types.ObjectId;
        },
        never
      >
  >;

  findAll(): Promise<
    (Document<
      unknown,
      {},
      {
        name: string;
        email: string;
        createdAt: Date;
      }
    > &
      Omit<
        {
          name: string;
          email: string;
          createdAt: Date;
        } & {
          _id: Types.ObjectId;
        },
        never
      >)[]
  >;

  updateUser(id: string): Promise<
    | (Document<
        unknown,
        {},
        {
          name: string;
          email: string;
          createdAt: Date;
        }
      > &
        Omit<
          {
            name: string;
            email: string;
            createdAt: Date;
          } & {
            _id: Types.ObjectId;
          },
          never
        >)
    | null
  >;
  findUserByEmail(email: string);
  findById(id: string);
  deleteUser(id: string): Promise<void>;
}

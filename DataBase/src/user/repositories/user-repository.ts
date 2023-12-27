import { Prisma, User } from "@prisma/client";

export interface UsersRepository{
  create(data: Prisma.UserUncheckedCreateInput): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
  findUserById(id: string): Promise<User | null>;
  save(user: User): Promise<User>;
}
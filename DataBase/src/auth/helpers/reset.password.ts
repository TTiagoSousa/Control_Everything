import { PrismaUsersRepository } from "src/user/repositories/prisma/prisma-user-repisitory";
import { NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { hashPassword, isStrongPassword } from "src/utils/all.utilis";
import * as Reset_Password_Error from '../../user/errors/recover.passwords.erros';

export async function resetPassword(
  jwt: JwtService,
  token: string,
  newPassword: string
) {

  const payload = jwt.verify(token);
  const userEmail = payload.email;

  const usersRepository = new PrismaUsersRepository();
  const user = await usersRepository.findByEmail(userEmail);

  if (!user) {
    throw new NotFoundException('User not found.');
  }

  const hashedPassword = await hashPassword(newPassword);

  await usersRepository.save({
    ...user,
    hashedPassword
  });
}
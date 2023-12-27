import { ForbiddenException, NotFoundException } from '@nestjs/common';
import { Request } from 'express';
import { PrismaUsersRepository } from '../repositories/prisma/prisma-user-repisitory';

export async function getMyUser(id: string, req: Request) {
  const usersRepository = new PrismaUsersRepository();

  const user = await usersRepository.findUserById(id);

  if (!user) {
    throw new NotFoundException('User not found');
  }

  const foundUser = req.user as { id?: string };

  if (!foundUser || !foundUser.id) {
    throw new ForbiddenException('Invalid user in the request');
  }

  if (user.id !== foundUser.id) {
    throw new ForbiddenException('You do not have permission to access this user.');
  }

  return { user };
}
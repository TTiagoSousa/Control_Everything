import { JwtService } from '@nestjs/jwt';
import { PrismaUsersRepository } from 'src/user/repositories/prisma/prisma-user-repisitory';
import { UnauthorizedException } from '@nestjs/common';
import { createToken } from '../../utils/all.utilis';

export async function refreshTokens(jwt: JwtService, refreshToken: string) {
  const usersRepository = new PrismaUsersRepository();

  const decodedRefreshToken = jwt.decode(refreshToken) as { id: string };
  const isRefreshTokenValid = jwt.verify(refreshToken);

  if (!isRefreshTokenValid) {
    throw new UnauthorizedException('Refresh token is invalid');
  }

  // Obtenha o usuário correspondente ao token de atualização
  const user = await usersRepository.findUserById(decodedRefreshToken.id);

  // Crie um novo par de tokens de acesso e atualização
  const { token, refreshToken: newRefreshToken } = await createToken({
    id: user.id,
    email: user.email,
  });

  return { token, refreshToken: newRefreshToken };
}
import { JwtService } from "@nestjs/jwt";
import { signin_dto } from "src/user/dto/signin.dto";
import { PrismaUsersRepository } from "src/user/repositories/prisma/prisma-user-repisitory";
import * as Utili from '../../utils/all.utilis';
import { Request, Response } from 'express';
import * as Singnin_Error from '../../user/errors/signin.errors';

export async function Signin (
  dto: signin_dto,
  jwt: JwtService,
  req: Request,
  res: Response,
) {

  const { email, password } = dto
  const usersRepository = new PrismaUsersRepository();
  
  const foundUser = await usersRepository.findByEmail(email);

  if (!foundUser) {
    throw new Singnin_Error.User_Not_Found;
  }

  const isMatch = await Utili.comparePasswords({
    password,
    hash: foundUser.hashedPassword,
  })

  if (!isMatch) {
    throw new Singnin_Error.Password_Doenst_Macht;
  }

  const isAdmin = foundUser.role === 'ADMIN';

  const { token, refreshToken } = await Utili.createToken({
    id: foundUser.id,
    email: foundUser.email,
    role: foundUser.role,
  });

  if (!token) {
    throw  new Error('Something went wrong');
  }

  res.cookie('token', token);
  res.cookie('refreshToken', refreshToken);

  return res.send({ token, isAdmin, message: 'Login successful' });
}

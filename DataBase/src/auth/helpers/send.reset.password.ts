import resetPasswordTemplate from "src/email/templates/reset-password";
import { isValidEmail } from "src/utils/all.utilis";
import * as Send_Reset_Password_Email_Error from '../../user/errors/send.reset.password.email.errors';
import { EmailService } from "src/email/email.service";
import { JwtService } from "@nestjs/jwt";
import { PrismaUsersRepository } from "src/user/repositories/prisma/prisma-user-repisitory";

export async function sendResetPasswordEmail(
  email: string, 
  emailService: EmailService,
  jwt: JwtService,
) {

  const usersRepository = new PrismaUsersRepository();
  
  if (!isValidEmail(email)) {
    throw new Send_Reset_Password_Email_Error.Email_is_Not_Valid;
  }

  const foundUser = await usersRepository.findByEmail(email);

  if (!foundUser) {
    throw new Send_Reset_Password_Email_Error.User_Not_Found;
  }

  const resetToken = jwt.sign({ email }, { expiresIn: '1d' });
  const encodedToken = Buffer.from(resetToken).toString('base64');
  const resetPasswordLink = `http://192.168.1.18:5173/Recover_Password/${encodedToken}`;
  const html = resetPasswordTemplate(resetPasswordLink); 
    
  await emailService.sendEmail(email, 'reset password', html);
}
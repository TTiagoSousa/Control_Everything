import { Injectable } from '@nestjs/common';
import { signup_dto } from 'src/user/dto/signup.dto';
import { Signup } from './helpers/signup';
import { EmailService } from 'src/email/email.service';
import { JwtService } from '@nestjs/jwt'
import { sendActivationEmail } from './helpers/send.activation.email';
import { activateAccount } from './helpers/activate.account';
import { sendResetPasswordEmail } from './helpers/send.reset.password';
import { resetPassword } from './helpers/reset.password';
import { signin_dto } from 'src/user/dto/signin.dto';
import { Signin } from './helpers/signin';
import { refreshTokens } from './helpers/refresh.tokens';

@Injectable()
export class AuthService {
  constructor(
    private readonly emailService: EmailService,
    private readonly jwt: JwtService,
  ) {}

  async signup(dto: signup_dto) {
    const result = await Signup(dto, this.jwt, this.emailService);
    return result;
  }

  async sendActivationEmail(email: string, token: string, fullName: string) {
    const result  = await sendActivationEmail(email, token, fullName, this.emailService);
    return result;
  }
  
  async activateAccount(token: string) {
    const result = await activateAccount(this.jwt, token);
    return result;
  }

  async sendResetPasswordEmail(email: string) {
    const result  = await sendResetPasswordEmail(email, this.emailService, this.jwt);
    return result;
  }

  async resetPassword( newPassword: string, token: string) {
    const result  = await resetPassword(this.jwt, newPassword, token);
    return result;
  }

  async signin(dto: signin_dto, req, res) {
    const result = await Signin(dto, this.jwt, req, res);
    return result;
  }

  async refreshTokens(refreshToken: string) {
    return refreshTokens(this.jwt, refreshToken);
  }
}

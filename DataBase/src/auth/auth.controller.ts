import { Body, Controller, Get, Param, Res, Req, Post, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { signup_dto } from 'src/user/dto/signup.dto';
import { signin_dto } from 'src/user/dto/signin.dto';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() dto: signup_dto) {

    return this.authService.signup(dto);
  }

  @Get('activate/:token')
  async activateAccount(@Param('token') token: string) {

    await this.authService.activateAccount(token);

    return;
  }

  @Post('reset-password')
  async sendPasswordResetEmail(@Body('email') email: string) {

   await this.authService.sendResetPasswordEmail(email)

    return;
  }

  @Post('reset-password/:token')
  async resetPassword(@Param('token') token: string, @Body('newPassword') newPassword: string) {
    try {
      await this.authService.resetPassword(token, newPassword);
      return { message: 'Password reset successfully' };
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error; 
      }

      throw new BadRequestException('Invalid token or error resetting password.');
    }
  }

  @Post('signin')
  async signin(@Body() dto: signin_dto, @Req() req, @Res() res) {

    return this.authService.signin(dto, req, res);
  }

  @Post('refresh-token')
  async refreshToken(@Req() req: Request, @Res() res: Response) {
    const refreshToken = req.cookies.refreshToken;
  
    const { token, refreshToken: newRefreshToken } = await this.authService.refreshTokens(refreshToken);
  
    // Defina os novos cookies de token de acesso e atualização
    res.cookie('token', token);
    res.cookie('refreshToken', newRefreshToken);
  
    return res.send({ token });
  }
}

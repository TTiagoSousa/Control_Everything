import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UserSettingsService } from './user-settings.service';
import { JwtAuthGuard } from 'src/auth/jwt.guard';

@Controller('user-settings')
export class UserSettingsController {
  constructor(private readonly userSettingsService: UserSettingsService) {}

  @UseGuards(JwtAuthGuard)
  @Get(':userId/get')
  async getTotalTransitionsByUserId(@Param('userId') userId: string) {
    return this.userSettingsService.getUserSettings(userId);
  }
}

import { Controller, UseGuards, Post, Body, Req, Get, Param } from '@nestjs/common';
import { SavingTransitionsService } from './saving_transitions.service';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { Request } from 'express';
import { createSavingTransition_dto } from './dto/create.savings.transition.dto';

@Controller('saving-transitions')
export class SavingTransitionsController {
  constructor(private readonly savingTransitionsService: SavingTransitionsService) {}

  @UseGuards(JwtAuthGuard)
  @Post('create')
  async createSavingTransition(@Req() req: Request, @Body() dto: createSavingTransition_dto) {
    const userId = req.user['id'];
    return this.savingTransitionsService.CreateSavingTransition(dto, userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':userId/total-of-savnig-transitions')
  async getTotalTransitionsByUserId(@Param('userId') userId: string) {
    return this.savingTransitionsService.getTotalTransitionsByUserId(userId);
  }
}

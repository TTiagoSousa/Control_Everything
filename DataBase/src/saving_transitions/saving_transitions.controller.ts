import { Controller, UseGuards, Post, Body, Req, Get, Param, Query, Delete, Patch } from '@nestjs/common';
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

  @UseGuards(JwtAuthGuard)
  @Get(':userId/get-savings-transitions')
  async getSavingTransitionsByUserId(
    @Param('userId') userId: string,
    @Query('perPage') perPage?: number,
    @Query('page') page?: number,
  ) {
    return this.savingTransitionsService.getSavingTransitions(userId, perPage, page);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':userId/:transitionId/disable-savings-transition')
  async disableSavingTransition(
    @Param('userId') userId: string,
    @Param('transitionId') transitionId: string,
  ) {
    return this.savingTransitionsService.disableSavingTransition(userId, transitionId);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':userId/:transitionId/enable-savings-transition')
  async enableSavingTransition(
    @Param('userId') userId: string,
    @Param('transitionId') transitionId: string,
  ) {
    return this.savingTransitionsService.enableSavingTransition(userId, transitionId);
  }

  // @UseGuards(JwtAuthGuard)
  // @Get(':userId/get-total-by-currency-type')
  // async getTotalByCurrencyType(@Param('userId') userId: string) {
  //   return this.savingTransitionsService.getTotalByCurrencyType(userId, baseCurrency, targetCurrencyPair);
  // }

  @UseGuards(JwtAuthGuard)
  @Get(':userId/get-total-by-currency-type/:targetCurrencyPair')
  async getTotalByCurrencyType(
    @Param('userId') userId: string,
    @Param('targetCurrencyPair') targetCurrencyPair: string,
  ) {
    
      const baseCurrency = 'USD';

      // Get the total amount for each currency type in the specified base currency
      const totalByCurrencyType = await this.savingTransitionsService.getTotalByCurrencyType(userId, baseCurrency, targetCurrencyPair);

      return totalByCurrencyType 
  }

  @UseGuards(JwtAuthGuard)
  @Get(':userId/get-total-converted/:targetCurrencyPair')
  async getTotalConverted(
    @Param('userId') userId: string,
    @Param('targetCurrencyPair') targetCurrencyPair: string,
  ) {
    
      const baseCurrency = 'USD';

      // Get the total amount for each currency type in the specified base currency
      const totalConverted = await this.savingTransitionsService.getTotalConverted(userId, baseCurrency, targetCurrencyPair);

      return totalConverted 
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':userId/:transitionId') // Modificamos o nome do parâmetro de "transitionId" para "id"
  async updateSavingTransition(
    @Param('userId') userId: string,
    @Param('transitionId') id: string, // Modificamos o nome do parâmetro de "transitionId" para "id"
    @Body() dto: createSavingTransition_dto,
  ) {
    return this.savingTransitionsService.ModifySavingTransition(dto, id, userId);
  }
}

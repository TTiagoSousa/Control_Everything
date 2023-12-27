import { Controller, Get, Post } from '@nestjs/common';
import { CurrencyService } from './currency.service';

@Controller('currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Post('fetch-data')
  async createCurrency() {
    await this.currencyService.UpdateCurrencyDatabase();
    return { message: 'Moeda inserida com sucesso' };
  }

  @Get('get-all-currencies')
  async getAllCurrencies() {
    const currencies = await this.currencyService.GetCurrencyFromDataBase();
    return { currencies };
  }
}

import { Injectable } from '@nestjs/common';
import { UpdateCurrency } from './helpers/update.currency';
import { GetCurrencyFromDataBase } from './helpers/get.currency.database';

@Injectable()
export class CurrencyService {

  async UpdateCurrencyDatabase() {
    const result = await UpdateCurrency();
    return result;
  }

  async GetCurrencyFromDataBase() {
    const result = await GetCurrencyFromDataBase();
    return result;
  }
}

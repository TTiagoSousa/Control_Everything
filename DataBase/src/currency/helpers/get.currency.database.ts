import { PrismaCurrencyRepository } from '../repositories/prisma/prisma-currency-repisitory';
import { BadGatewayException } from '@nestjs/common';

export async function GetCurrencyFromDataBase() {

  const currencyRepository = new PrismaCurrencyRepository();

  try {
    const currencies = await currencyRepository.findAll();
    return currencies;
  } catch (error) {
    console.error('Error fetching currencies:', error);
    throw new BadGatewayException('Failed to fetch currencies');
  }
}
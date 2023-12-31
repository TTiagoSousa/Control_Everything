import axios from 'axios';
import { PrismaCurrencyRepository } from '../repositories/prisma/prisma-currency-repisitory';

export async function UpdateCurrency() {

  const Currency_Api_Freecurrencyapi_Key: string = process.env.Currency_Api_Freecurrencyapi_Key;

  const currencyRepository = new PrismaCurrencyRepository();

  const currencyRateUrl  = `https://api.freecurrencyapi.com/v1/latest?apikey=${Currency_Api_Freecurrencyapi_Key}&base_currency=USD`;
  const responseCurrencyRate = await axios.get(currencyRateUrl);
  const currencyRates = responseCurrencyRate.data.data;

  const currencyNameUrl  = `https://api.freecurrencyapi.com/v1/currencies?apikey=${Currency_Api_Freecurrencyapi_Key}&currencies=`;
  const responseCurrencyName = await axios.get(currencyNameUrl);
  const currencies = responseCurrencyName.data.data;

  const simplifiedCurrencies = Object.keys(currencies).map((currency) => {
    return {
      name_currency: currencies[currency].name,
      symbol_currency: currencies[currency].symbol,
      code_currency: currencies[currency].code,
    };
  });

  const currencyRateMap: Map<string, number> = new Map();
  for (const [code, rate] of Object.entries(currencyRates)) {
    currencyRateMap.set(code, rate as number);
  }

  for (const currency of simplifiedCurrencies) {
    const rate = currencyRateMap.get(currency.code_currency) ?? 0;
    const existingCurrency = await currencyRepository.findByCode(currency.code_currency);
    if (existingCurrency) {
      await currencyRepository.updateRate(existingCurrency.id, rate.toString());
      // console.log(`Rate atualizado ${currency.code_currency}: ${rate.toString()}`);
    } else {
      try {
        await currencyRepository.create({
          symbol: currency.symbol_currency,
          name: currency.name_currency,
          rate: rate.toString(),
          code: currency.code_currency,
        });
        // console.log(`Created currency ${currency.code_currency} with rate ${rate.toString()}`);
      } catch (error) {
        console.error('Error creating currency:', error);
      }
    }
  }
}
import { GetCurrencyFromDataBase } from "src/currency/helpers/get.currency.database";
import { PrismaSavingsTransitionsRepository } from "../repositories/prisma/prisma-savings-transitions-repisitory";
import { BadRequestException } from "@nestjs/common";

export async function getTotalByCurrencyType(
  userId : string, 
  baseCurrency: string, 
  targetCurrencyPair: string
) : Promise<{ currencyType: string; symbol: string; totalAmount: number; convertedAmount: number; baseCurrencySymbol: string }[]>{

  const SavingsTransitionRepository = new PrismaSavingsTransitionsRepository();

  const activeTransitions = await SavingsTransitionRepository.findMany(userId)

  const currencyTotals: { [currencyType: string]: number } = {};
  for (const transition of activeTransitions) {
    const { currencyType, amount } = transition;
    if (currencyType in currencyTotals) {
      currencyTotals[currencyType] += amount;
    } else {
      currencyTotals[currencyType] = amount;
    }
  }

  const currenciesData = await GetCurrencyFromDataBase();

  const baseCurrencyData = currenciesData.find(c => c.code === baseCurrency);
  const targetCurrencyData = currenciesData.find(c => c.code === targetCurrencyPair);
  const baseToTargetRate = Number(targetCurrencyData.rate) / Number(baseCurrencyData.rate);

  const result: { currencyType: string; symbol: string; totalAmount: number; convertedAmount: number; baseCurrencySymbol: string }[] = [];

  for (const currencyType in currencyTotals) {
    const totalAmount = currencyTotals[currencyType];
    const currency = currenciesData.find(c => c.code === currencyType);

    // Convert each currency amount to USD
    const amountInUSD = totalAmount / Number(currency.rate);

    // Convert from USD to target currency
    const convertedAmount = Math.round((amountInUSD * baseToTargetRate) * 100) / 100;

    result.push({
      currencyType,
      symbol: currency.symbol,
      totalAmount,
      convertedAmount,
      baseCurrencySymbol: targetCurrencyData.symbol,
    });
  }

  return result;
}

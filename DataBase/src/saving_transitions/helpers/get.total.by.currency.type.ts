import { GetCurrencyFromDataBase } from "src/currency/helpers/get.currency.database";
import { PrismaSavingsTransitionsRepository } from "../repositories/prisma/prisma-savings-transitions-repisitory";
import { BadRequestException } from "@nestjs/common";

export async function getTotalByCurrencyType(
  userId: string, 
  baseCurrency: string, 
  targetCurrencyPair: string
): Promise<{
  result: {
    currencyType: string;
    symbol: string;
    totalAmount: number;
    convertedAmount: number;
    baseCurrencySymbol: string;
  }[];
  totalConvertedAmount: number;
  baseCurrencySymbol: string;
  baseCurrencyCode: string;
}> {

  const SavingsTransitionRepository = new PrismaSavingsTransitionsRepository();

  const activeTransitions = await SavingsTransitionRepository.findMany(userId);

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
  if (!baseCurrencyData || !targetCurrencyData) {
    throw new BadRequestException('Invalid currency code provided');
  }
  const baseToTargetRate = Number(targetCurrencyData.rate) / Number(baseCurrencyData.rate);

  let totalConvertedAmount = 0;
  let baseCurrencySymbol = '';
  let baseCurrencyCode = '';

  const result = [];

  for (const currencyType in currencyTotals) {
    const totalAmount = currencyTotals[currencyType];
    const currency = currenciesData.find(c => c.code === currencyType);
    if (!currency) {
      continue; // Ignore if currency data is not found
    }

    // Convert each currency amount to USD
    const amountInUSD = totalAmount / Number(currency.rate);

    // Convert from USD to target currency
    const convertedAmount = Math.round((amountInUSD * baseToTargetRate) * 100) / 100;

    totalConvertedAmount += convertedAmount;
    baseCurrencySymbol = baseCurrencyData.symbol;
    baseCurrencyCode = baseCurrencyData.code;

    result.push({
      currencyType,
      symbol: currency.symbol,
      totalAmount,
      convertedAmount,
      baseCurrencySymbol: baseCurrencyData.symbol,
    });
  }

  return { result, totalConvertedAmount, baseCurrencySymbol, baseCurrencyCode };
}
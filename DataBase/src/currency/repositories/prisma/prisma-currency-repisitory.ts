import { Prisma, PrismaClient, Currency} from "@prisma/client";
import { CurrencyRepository } from "../currency-repository";
import { prisma } from '../../../lib/prisma';

export class PrismaCurrencyRepository implements CurrencyRepository{

  async create(data: Prisma.CurrencyUncheckedCreateInput) {
    const currency = await prisma.currency.create({
      data,
    })

    return currency
  }

  async findByCode(code: string) {
    const currencyCode = await prisma.currency.findUnique({
      where: {
        code
      },
    });

    return currencyCode;
  }

  async updateRate(id: string, rate: string) {
    const currency = await prisma.currency.update({
      where: {
        id,
      },
      data: {
        rate,
      },
    });
  
    return currency;
  }

  async findAll(){
    const currencies = await prisma.currency.findMany();

    return currencies;
  }
}


//CRUD - create read update delete
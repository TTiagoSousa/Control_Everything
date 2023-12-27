import { Currency, Prisma } from "@prisma/client";

export interface CurrencyRepository {
  create(data: Prisma.CurrencyUncheckedCreateInput): Promise<Currency>;
  findByCode(code: string): Promise<Currency | null>;
  updateRate(id: string, rate: string):Promise<Currency | null>;
  findAll(): Promise<Currency[]>;
}
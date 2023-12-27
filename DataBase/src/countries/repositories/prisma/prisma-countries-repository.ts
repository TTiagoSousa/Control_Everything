import { Prisma, PrismaClient, Country} from "@prisma/client";
import { CoutriesRepository } from "../countries-repository";
import { prisma } from '../../../lib/prisma';

export class PrismaCountryRepository implements CoutriesRepository{

  async create(data: Prisma.CountryUncheckedCreateInput) {
    const countries = await prisma.country.create({
      data,
    })
  
    return countries
  }

  async findByName(countryName: string) {
    const country = await prisma.country.findUnique({
      where: {
        countryName: countryName,
      },
    });
  
    return country;
  }

  async updateCountries(countryName: string, countryFlag: string) {
    const country = await prisma.country.update({
      where: {
        countryName,
      },
      data: {
        CoutryFlag: countryFlag,
        countryName,
      },
    });
  
    return country;
  }

  async findAll(){
    const country = await prisma.country.findMany();

    return country;
  }

  async deleteAllCountries() {
    const deleteInfo = await prisma.country.deleteMany();
    return deleteInfo;
  }
}
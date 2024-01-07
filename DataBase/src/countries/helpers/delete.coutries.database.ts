import { PrismaCountryRepository } from "../repositories/prisma/prisma-countries-repository";

export async function DeleteAllCountries() {

  const countriesRepository = new PrismaCountryRepository();

  try {
    
    const deleteInfo = await countriesRepository.deleteAllCountries();

  } catch (error) {
    console.log(error);
  }
}
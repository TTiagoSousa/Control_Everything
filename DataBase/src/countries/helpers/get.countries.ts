import axios from 'axios';
import { PrismaCountryRepository } from '../repositories/prisma/prisma-countries-repository';
import { DeleteAllCountries } from './delete.coutries.database';

export async function GetCoutries() {

  const apiUrl: string = process.env.Countries_Api;
  const countriesRepository = new PrismaCountryRepository();

  try {

    await DeleteAllCountries()
    // Fetch data from the API
    const response = await axios.get(apiUrl);
    
    // Process the data and filter out falsy values
    const countries = response.data.map(country => ({
      name: country.name.common,
      flag: country.flags[1],
    })).filter(Boolean)
      .sort((a, b) => a.name.localeCompare(b.name));
    
    // Loop through countries and interact with the database
    for (const country of countries) {
      await countriesRepository.create({
        countryName: country.name,
        CoutryFlag: country.flag,
      });
    }
  } catch (error) {
    console.error('Error fetching or processing countries:', error);
  }

}
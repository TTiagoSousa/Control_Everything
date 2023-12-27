import { Controller, Post, Get, Delete } from '@nestjs/common';
import { CountriesService } from './countries.service';

@Controller('countries')
export class CountriesController {
  constructor(private readonly coutriesService: CountriesService) {}

  @Post('fetch-data')
  async GetCoutries() {
    await this.coutriesService.GetCoutries();
    return { message: 'Moeda inserida com sucesso' };
  }

  @Get('get-all-countries')
  async getCountriesData() {
    const countries = await this.coutriesService.GetCoutriesFromDatabaseOrJson();
    return countries;
  }

  @Delete('delete-all-countries')
  async deleteAllCountries() {
    await this.coutriesService.DeleteAllCountries();
    return { message: 'Todos os países foram apagados com sucesso' };
  }
}

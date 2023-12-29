import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { CountriesModule } from './countries/countries.module';
import { EmailModule } from './email/email.module';
import { SavingTransitionsModule } from './saving_transitions/saving_transitions.module';
import { CurrencyModule } from './currency/currency.module';
import { UserSettingsModule } from './user-settings/user-settings.module';

@Module({
  imports: [AuthModule, UserModule, CountriesModule, EmailModule, SavingTransitionsModule, CurrencyModule, UserSettingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
import { Injectable } from '@nestjs/common';
import { createSavingTransition_dto } from './dto/create.savings.transition.dto';
import { CreateSavingTransition } from './helpers/create.saving.transition';
import { getTotalTransitionsByUserId } from './helpers/get.total.transitions.by.user';
import { getSavingTransitions } from './helpers/get.saavings.transitions';
import { disableSavingTransition } from './helpers/disable.saving.transition';
import { enableSavingTransition } from './helpers/enable.saving.transition';
import { getTotalByCurrencyType } from './helpers/get.total.by.currency.type';
import { ModifySavingTransition } from './helpers/modify.saving.transition';
import { modifySavingTransition_dto } from './dto/modigy.savings.transition.dto';
import { getTotalConverted } from './helpers/get.total.converted';

@Injectable()
export class SavingTransitionsService {

  async CreateSavingTransition(dto: createSavingTransition_dto, userId: string) {
    const result = await CreateSavingTransition(dto, userId);
    return result;
  }

  async getTotalTransitionsByUserId(userId: string) {
    const result = await getTotalTransitionsByUserId(userId);
    return result;
  }

  async getSavingTransitions(userId: string, perPage?: number, page?: number) {
    const result = await getSavingTransitions(userId, perPage, page);
    return result;
  }

  async disableSavingTransition(userId: string,transitionId: string){
    const result = await disableSavingTransition(userId,transitionId);

    return result
  }

  async enableSavingTransition(userId: string,transitionId: string){
    const result = await enableSavingTransition(userId,transitionId);

    return result
  }

  async getTotalByCurrencyType(userId: string,baseCurrency: string, targetCurrencyPair: string){
    const result = await getTotalByCurrencyType(userId, baseCurrency, targetCurrencyPair);
    
    return result
  }

  async getTotalConverted(userId: string,baseCurrency: string, targetCurrencyPair: string){
    const result = await getTotalConverted(userId, baseCurrency, targetCurrencyPair);
    
    return result
  }

  async ModifySavingTransition(dto: modifySavingTransition_dto, id: string, userId: string) {
    const result = await ModifySavingTransition(dto, id, userId);
    return result;
  }
}

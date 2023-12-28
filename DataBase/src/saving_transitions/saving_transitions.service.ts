import { Injectable } from '@nestjs/common';
import { createSavingTransition_dto } from './dto/create.savings.transition.dto';
import { CreateSavingTransition } from './helpers/create.saving.transition';
import { getTotalTransitionsByUserId } from './helpers/get.total.transitions.by.user';
import { getSavingTransitions } from './helpers/get.saavings.transitions';

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
}

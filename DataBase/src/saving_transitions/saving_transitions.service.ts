import { Injectable } from '@nestjs/common';
import { createSavingTransition_dto } from './dto/create.savings.transition.dto';
import { CreateSavingTransition } from './helpers/create.saving.transition';
import { getTotalTransitionsByUserId } from './helpers/get.total.transitions.by.user';

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
}

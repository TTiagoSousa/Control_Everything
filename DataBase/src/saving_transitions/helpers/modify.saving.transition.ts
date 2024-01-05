import { createSavingTransition_dto } from "../dto/create.savings.transition.dto";
import { PrismaSavingsTransitionsRepository } from "../repositories/prisma/prisma-savings-transitions-repisitory";
import { containsOnlyNumber } from "src/utils/all.utilis";
import { containsOnlyLettersAndNumbers } from "src/utils/text/contains.only.letters.and.numbers";
import { isValidHour } from "src/utils/hour/is.valid.hour";
import * as ModifyavingTransition_Error from '../errors/create.savings.transition.errors';
import { modifySavingTransition_dto } from "../dto/modigy.savings.transition.dto";

export async function ModifySavingTransition (
  dto: modifySavingTransition_dto,
  id: string,
  userID: string
) {

  const SavingsTransitionRepository = new PrismaSavingsTransitionsRepository();
  const { transitiontype, data, platform, amount, hour, currencyType } = dto;

  const existingTransition = await SavingsTransitionRepository.findByTransitionId(id);

  let transitionAmount = amount;

  if (transitiontype === 'Deposit') {
    transitionAmount = Math.abs(amount);
  } else if (transitiontype === 'Withdraw') {
    transitionAmount = -amount;
  }

  if (
    transitiontype !== 'Deposit' &&
    transitiontype !== 'Withdraw' &&
    transitiontype !== 'Transfer'
  ) {
    throw new ModifyavingTransition_Error.InvalitTypeTransition;
  }

  if(!isValidHour(hour)) {
    throw new ModifyavingTransition_Error.InvalidHour;
  }

  if(!containsOnlyNumber(amount.toString())) {
    throw new ModifyavingTransition_Error.InvalidTransitionAmount;
  }

  if(!containsOnlyLettersAndNumbers(platform)) {
    throw new ModifyavingTransition_Error.InvalidPlatform;
  }

  const updatedTransition = await SavingsTransitionRepository.save(userID, {
    ...existingTransition,
    transitiontype,
    data,
    hour,
    platform,
    amount: transitionAmount,
    currencyType,
  });
  
  return updatedTransition;
}
import { BadGatewayException } from "@nestjs/common";
import { createSavingTransition_dto } from "../dto/create.savings.transition.dto";
import { PrismaSavingsTransitionsRepository } from "../repositories/prisma/prisma-savings-transitions-repisitory";
import { containsOnlyNumber } from "src/utils/all.utilis";
import { containsOnlyLettersAndNumbers } from "src/utils/text/contains.only.letters.and.numbers";
import { isValidHour } from "src/utils/hour/is.valid.hour";
import * as CreateSavingTransition_Error from '../errors/create.savings.transition.errors';

export async function CreateSavingTransition (
  dto: createSavingTransition_dto,
  userId: string,
) {

  const SavingsTransitionRepository = new PrismaSavingsTransitionsRepository();
  const { transitiontype, data, platform, amount, hour, currencyType } = dto;

  const count = await SavingsTransitionRepository.countByUserId(userId)

  const nextNumber = count + 1;
  const lastTransitionID = `ST${String(nextNumber).padStart(2, '0')}`

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
    throw new CreateSavingTransition_Error.InvalitTypeTransition;
  }

  if(!isValidHour(hour)) {
    throw new CreateSavingTransition_Error.InvalidHour;
  }

  if(!containsOnlyNumber(amount.toString())) {
    throw new CreateSavingTransition_Error.InvalidTransitionAmount;
  }

  if(!containsOnlyLettersAndNumbers(platform)) {
    throw new CreateSavingTransition_Error.InvalidPlatform;
  }

  const savingTransition = await SavingsTransitionRepository.create({
    transitionID: lastTransitionID,
    transitiontype,
    data,
    hour,
    platform,
    amount: transitionAmount,
    currencyType,
    createdById: userId,
    isActive: true,   
  })
  
  return { message: 'Transição criada com sucesso', savingTransition };
}
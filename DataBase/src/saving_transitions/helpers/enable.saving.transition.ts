import { PrismaSavingsTransitionsRepository } from "../repositories/prisma/prisma-savings-transitions-repisitory";

export async function enableSavingTransition(userId: string,transitionId: string) {

  const SavingsTransitionRepository = new PrismaSavingsTransitionsRepository();

  const existingTransition = await SavingsTransitionRepository.findByTransitionId(transitionId);

  await SavingsTransitionRepository.save(userId, {
    ...existingTransition,
    isActive: true,
  });

  return {
    message: 'Saving transition enable successfully',
  };
};
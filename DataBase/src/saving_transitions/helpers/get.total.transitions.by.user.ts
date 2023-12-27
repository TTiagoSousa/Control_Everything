import { PrismaSavingsTransitionsRepository } from "../repositories/prisma/prisma-savings-transitions-repisitory";

export async function getTotalTransitionsByUserId(
  userId: string,
) {
  
  const SavingsTransitionRepository = new PrismaSavingsTransitionsRepository();

  const totalCount = await SavingsTransitionRepository.getTotalTransitionsByUserId(userId)

  return totalCount;
}
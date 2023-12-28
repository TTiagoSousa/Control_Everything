import { PrismaSavingsTransitionsRepository } from "../repositories/prisma/prisma-savings-transitions-repisitory";

export async function getSavingTransitions(userId: string, perPage?: number, page?: number) {

  const SavingsTransitionRepository = new PrismaSavingsTransitionsRepository();

  const pagination = {
    take: parseInt(String(perPage), 10) || 10, 
    skip: (page - 1) * (parseInt(String(perPage), 10) || 10) || 0, 
  };


  return SavingsTransitionRepository.getByUserIdWithPagination(userId, pagination.take, pagination.skip);
};
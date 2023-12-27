import { Prisma, SavingTransitions } from "@prisma/client";

export interface SavingsTransitionRepository {
  create(data: Prisma.SavingTransitionsUncheckedCreateInput): Promise<SavingTransitions>;
  countByUserId(userId: string): Promise<number>;
  getTotalTransitionsByUserId(userId: string): Promise<number>
}
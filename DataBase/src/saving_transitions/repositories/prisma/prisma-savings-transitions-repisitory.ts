import { Prisma, SavingTransitions } from "@prisma/client";
import { prisma } from '../../../lib/prisma';
import { SavingsTransitionRepository } from "../savings-transitions-repisitory";

export class PrismaSavingsTransitionsRepository implements SavingsTransitionRepository{

  async create(data: Prisma.SavingTransitionsUncheckedCreateInput) {
    const SavingTransiton = await prisma.savingTransitions.create({
      data,
    })

    return SavingTransiton
  }

  async countByUserId(userId: string): Promise<number> {
    try {
      const count = await prisma.savingTransitions.count({
        where: {
          createdById: userId,
        },
      });
      return count;
    } catch (error) {
      throw new Error(`Failed to count saving transitions for user: ${error.message}`);
    }
  }

  async getTotalTransitionsByUserId(userId: string): Promise<number> {
    const totalCount = await prisma.savingTransitions.count({
      where: {
        createdById: userId,
      },
    });

    return totalCount;
  }
}
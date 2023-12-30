import { Prisma, User } from "@prisma/client";
import { UserSettings } from "@prisma/client";
import { prisma } from '../../../lib/prisma';

export class PrismaUsersSettingsRepository implements PrismaUsersSettingsRepository{

  async create(data: Prisma.UserSettingsUncheckedCreateInput) {
    const userSettings = await prisma.userSettings.create({
      data,
    })

    return userSettings
  }

  async findFirst(userId: string): Promise<UserSettings | null> {
    const userSettings = await prisma.userSettings.findMany({
      where: {
        userId: userId,
      },
    });
  
    return userSettings[0];
  }
}
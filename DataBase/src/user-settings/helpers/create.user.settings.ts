import { PrismaUsersSettingsRepository } from "../repositories/prisma/prisma-user-settings-repisitory";

export async function createUserSettings (userId: string) {

  const usersSettingsRepository = new PrismaUsersSettingsRepository();

  const userSettings = await usersSettingsRepository.create({
    userId: userId,
    currency: 'USD',
  })
  
  return userSettings;
}
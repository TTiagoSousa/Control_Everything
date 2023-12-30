import { PrismaUsersSettingsRepository } from "../repositories/prisma/prisma-user-settings-repisitory";

export async function getUserSettings (userId: string) {

  const usersSettingsRepository = new PrismaUsersSettingsRepository();

  const userSettings = await usersSettingsRepository.findFirst(userId);

  return userSettings;
}
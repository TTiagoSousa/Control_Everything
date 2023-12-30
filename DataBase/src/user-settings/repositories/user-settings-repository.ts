import { Prisma, UserSettings } from "@prisma/client";

export interface UsersSettingsRepository{
    create(data: Prisma.UserSettingsUncheckedCreateInput): Promise<UserSettings>;
}
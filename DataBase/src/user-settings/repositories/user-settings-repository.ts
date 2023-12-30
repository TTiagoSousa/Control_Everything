import { Prisma, UserSettings } from "@prisma/client";

export interface UsersSettingsRepository{
    findFirst(userId: string): Promise<UserSettings[]>;
    create(data: Prisma.UserSettingsUncheckedCreateInput): Promise<UserSettings>;
}
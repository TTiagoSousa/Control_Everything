import { Injectable } from '@nestjs/common';
import { createUserSettings } from './helpers/create.user.settings';
import { getUserSettings } from './helpers/get.user.settings';

@Injectable()
export class UserSettingsService {

  async createUserSettings(userId: string) {
    const result = await createUserSettings(userId);
    return result;
  }

  async getUserSettings(userId: string){
    const result = await getUserSettings(userId);

    return result
  }
}

import { Injectable } from '@nestjs/common';
import { createUserSettings } from './helpers/create.user.settings';

@Injectable()
export class UserSettingsService {

  async createUserSettings(userId: string) {
    const result = await createUserSettings(userId);
    return result;
  }

}

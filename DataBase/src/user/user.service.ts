import { Injectable } from '@nestjs/common';
import { getMyUser } from './helpers/get.my.user';
import { Request } from 'express';

@Injectable()
export class UserService {

  async getMyUser(id: string, req: Request) {
    const result = await getMyUser(id, req);
    return result;
  }

}

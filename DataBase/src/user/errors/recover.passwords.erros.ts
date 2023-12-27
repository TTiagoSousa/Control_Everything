/* eslint-disable prettier/prettier */
import { BadRequestException } from '@nestjs/common';

export class weak_passowrd extends BadRequestException {
  constructor() {
    super('Passwords Weak');
  }
}
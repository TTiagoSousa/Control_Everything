/* eslint-disable prettier/prettier */
import { BadRequestException } from '@nestjs/common';

export class Email_is_Not_Valid extends BadRequestException {
  constructor() {
    super('Email is not valid');
  }
}
export class User_Not_Found extends BadRequestException {
  constructor() {
    super('User Not Found');
  }
}
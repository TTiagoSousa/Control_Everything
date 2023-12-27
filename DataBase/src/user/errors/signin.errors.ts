import { BadRequestException } from '@nestjs/common';

export class User_Not_Found extends BadRequestException {
  constructor() {
    super('Email or password is incorrect');
  }
}

export class Password_Doenst_Macht extends BadRequestException {
  constructor() {
    super('Email or password is incorrect');
  }
}
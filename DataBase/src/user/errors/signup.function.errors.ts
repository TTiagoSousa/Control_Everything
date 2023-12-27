/* eslint-disable prettier/prettier */
import { BadRequestException } from '@nestjs/common';

export class Email_Already_Exists extends BadRequestException {
  constructor() {
    super('Email already exists');
  }
}

export class Email_is_Not_Valid extends BadRequestException {
  constructor() {
    super('Email is not valid');
  }
}

export class Passwords_Do_Not_Match extends BadRequestException {
  constructor() {
    super('Passwords do not match');
  }
}

export class Weak_Passowrd extends BadRequestException {
  constructor() {
    super('Passwords Weak');
  }
}

export class Minimum_Age extends BadRequestException {
  constructor() {
    super('You must be at least 16 years old to create an account');
  }
}

export class Invalid_Full_Name extends BadRequestException {
  constructor() {
    super('Full name must contain only letters');
  }
}

export class Invalid_Country extends BadRequestException {
  constructor() {
    super('Invalid Country');
  }
}

export class Disposable_Emails extends BadRequestException {
  constructor() {
    super('Disposable Emails are not allowed');
  }
}

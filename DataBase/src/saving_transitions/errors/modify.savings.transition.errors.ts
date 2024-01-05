import { BadRequestException } from '@nestjs/common';

export class InvalitTypeTransition extends BadRequestException {
  constructor() {
    super('Invalid value for type of transaction');
  }
}

export class InvalidHour extends BadRequestException {
  constructor() {
    super('Invalid hour');
  }
}

export class InvalidTransitionAmount extends BadRequestException {
  constructor() {
    super('Invalid transition amount');
  }
}

export class InvalidPlatform extends BadRequestException {
  constructor() {
    super('Platform name must contain only letters and numbers');
  }
}


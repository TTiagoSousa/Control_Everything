/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class currency_dto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  symbol: string;
  
  @ApiProperty()
  code: string;

  @ApiProperty()
  rate: string;
}
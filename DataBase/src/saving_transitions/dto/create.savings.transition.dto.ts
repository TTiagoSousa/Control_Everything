/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class createSavingTransition_dto {

  @ApiProperty()
  @IsNotEmpty()
  transitiontype: 'Deposit' | 'Withdraw';

  @ApiProperty()
  @IsNotEmpty()
  currencyType: string

  @ApiProperty()
  @IsNotEmpty()
  data: string;

  @ApiProperty()
  @IsNotEmpty()
  hour: string;

  @ApiProperty()
  @IsNotEmpty()
  platform: string;

  @ApiProperty()
  @IsNotEmpty() 
  amount: number;

}
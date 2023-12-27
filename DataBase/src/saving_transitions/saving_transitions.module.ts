import { Module } from '@nestjs/common';
import { SavingTransitionsService } from './saving_transitions.service';
import { SavingTransitionsController } from './saving_transitions.controller';

@Module({
  controllers: [SavingTransitionsController],
  providers: [SavingTransitionsService],
})
export class SavingTransitionsModule {}

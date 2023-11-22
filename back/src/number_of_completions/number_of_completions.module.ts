import { Module } from '@nestjs/common';
import { NumberOfCompletionsService } from './number_of_completions.service';
import { NumberOfCompletionsController } from './number_of_completions.controller';

@Module({
  controllers: [NumberOfCompletionsController],
  providers: [NumberOfCompletionsService],
})
export class NumberOfCompletionsModule {}

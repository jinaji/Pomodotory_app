import { Test, TestingModule } from '@nestjs/testing';
import { NumberOfCompletionsController } from './number_of_completions.controller';
import { NumberOfCompletionsService } from './number_of_completions.service';

describe('NumberOfCompletionsController', () => {
  let controller: NumberOfCompletionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NumberOfCompletionsController],
      providers: [NumberOfCompletionsService],
    }).compile();

    controller = module.get<NumberOfCompletionsController>(NumberOfCompletionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

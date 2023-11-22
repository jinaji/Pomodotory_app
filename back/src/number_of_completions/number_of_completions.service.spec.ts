import { Test, TestingModule } from '@nestjs/testing';
import { NumberOfCompletionsService } from './number_of_completions.service';

describe('NumberOfCompletionsService', () => {
  let service: NumberOfCompletionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NumberOfCompletionsService],
    }).compile();

    service = module.get<NumberOfCompletionsService>(
      NumberOfCompletionsService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

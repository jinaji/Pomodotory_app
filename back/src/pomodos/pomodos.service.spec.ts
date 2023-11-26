import { Test, TestingModule } from '@nestjs/testing';
import { PomodosService } from './pomodos.service';

describe('PomodosService', () => {
  let service: PomodosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PomodosService],
    }).compile();

    service = module.get<PomodosService>(PomodosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

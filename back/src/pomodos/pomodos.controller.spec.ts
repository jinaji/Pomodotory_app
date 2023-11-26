import { Test, TestingModule } from '@nestjs/testing';
import { PomodosController } from './pomodos.controller';
import { PomodosService } from './pomodos.service';

describe('PomodosController', () => {
  let controller: PomodosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PomodosController],
      providers: [PomodosService],
    }).compile();

    controller = module.get<PomodosController>(PomodosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

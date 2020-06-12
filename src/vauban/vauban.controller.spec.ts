import { Test, TestingModule } from '@nestjs/testing';
import { VaubanController } from './vauban.controller';

describe('Vauban Controller', () => {
  let controller: VaubanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VaubanController],
    }).compile();

    controller = module.get<VaubanController>(VaubanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

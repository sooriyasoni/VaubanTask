import { Test, TestingModule } from '@nestjs/testing';
import { VaubanService } from './vauban.service';

describe('VaubanService', () => {
  let service: VaubanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VaubanService],
    }).compile();

    service = module.get<VaubanService>(VaubanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

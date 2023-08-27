import { Test, TestingModule } from '@nestjs/testing';
import { PublicPointsService } from './public-points.service';

describe('PublicPointsService', () => {
  let service: PublicPointsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PublicPointsService],
    }).compile();

    service = module.get<PublicPointsService>(PublicPointsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

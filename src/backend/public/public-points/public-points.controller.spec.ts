import { Test, TestingModule } from '@nestjs/testing';
import { PublicPointsController } from './public-points.controller';

describe('PublicPointsController', () => {
  let controller: PublicPointsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PublicPointsController],
    }).compile();

    controller = module.get<PublicPointsController>(PublicPointsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
